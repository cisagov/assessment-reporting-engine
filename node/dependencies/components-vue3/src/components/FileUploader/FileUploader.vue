<template>
  <div
    data-id="sds-file-uploader"
    class="border border-dashed border-2 dark:border-gray-700 rounded p-4 space-y-2 relative"
  >
    <input
      ref="fileInput"
      v-uid
      type="file"
      :accept="accept"
      :multiple="multiple"
      :required="required"
      class="absolute inset-0 opacity-0 cursor-pointer"
      :name="name"
      @change="processFiles"
    >
    <div class="space-y-2">
      <div class="flex gap-2">
        <label
          :for="fileInput?.id"
          class="btn btn-default cursor-pointer z-10"
        >Browse</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="my-auto h-4 w-4 text-tertiary"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25.001L224 109.3V352c0 17.67 14.33 32 32 32s32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0s-16.4 3.125-22.6 9.375L105.4 137.4c-12.52 12.5-12.52 32.7 0 45.2zM480 352H320c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-48 104c-13.2 0-24-10.8-24-24s10.8-24 24-24s24 10.8 24 24s-10.8 24-24 24z"
          />
        </svg>
        <span class="my-auto">{{ multiple ? 'Drag and drop your files here' : 'Drag and drop a file here' }}</span>
      </div>
      <p class="text-gray-500 text-sm">
        {{ helperText ? helperText : multiple ? `Use files under ${filesize} MB.` : `Use a file under ${filesize} MB.` }}
      </p>
      <!-- @slot File list content. @binding files, invalidFiles -->
      <slot
        :files="fileList"
        :invalid-files="invalidFileList"
      >
        <ul v-if="fileList.length > 0 || invalidFileList.length > 0">
          <li
            v-for="f in fileList"
            :key="f.name + f.size + f.type + f.lastModified"
            class="py-2 border-b only:border-0 last:pb-0 last:border-0"
          >
            <div class="flex">
              <div class="my-auto flex gap-1 flex-grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-4 h-4 my-auto text-success"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2 44.2l108.2-108.2c10.9-10.9 28.7-10.9 39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
                  />
                </svg>
                <span class="my-auto">{{ f.name }}</span>
                <span class="my-auto text-tertiary text-sm uppercase">({{ byteToSize(f.size) }})</span>
              </div>
              <button
                class="my-auto z-10 link hover:text-danger dark:hover:text-red-400"
                @click="removeFile(f)"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 x"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Remove file</span>
              </button>
            </div>
          </li>
          <li
            v-for="f in invalidFileList"
            :key="f.name + f.size + f.type + f.lastModified"
            class="py-2 border-b only:border-0 last:pb-0 last:border-0"
          >
            <div class="flex">
              <div class="my-auto flex gap-1 flex-grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-4 h-4 my-auto text-danger"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M175 175c9.4-9.3 24.6-9.3 33.1 0l47 47.1L303 175c9.4-9.3 24.6-9.3 33.1 0c10.2 9.4 10.2 24.6 0 33.1l-46.2 47l46.2 47.9c10.2 9.4 10.2 24.6 0 33.1c-8.5 10.2-23.7 10.2-33.1 0l-47.9-46.2l-47 46.2c-8.5 10.2-23.7 10.2-33.1 0c-9.3-8.5-9.3-23.7 0-33.1l47.1-47.9l-47.1-47c-9.3-8.5-9.3-23.7 0-33.1zm337 81c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
                  />
                </svg>
                <span class="my-auto">{{ f.name }}</span>
                <span class="my-auto text-tertiary text-sm uppercase">({{ byteToSize(f.size) }})</span>
              </div>
              <button
                class="my-auto z-10 link hover:text-danger dark:hover:text-red-400"
                @click="removeInvalidFile(f)"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 x"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Remove file</span>
              </button>
            </div>
            <p
              v-if="f.invalidType"
              class="text-danger text-xs ml-5 mt-1"
            >
              Invalid file type
            </p>
            <p
              v-if="f.invalidSize"
              class="text-danger text-xs ml-5 mt-1"
            >
              File size is over {{ filesize }} MB.
            </p>
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Uid } from '@shimyshack/uid'
export default {
  directives: {
    uid: Uid
  }
}
</script>

<script setup lang="ts">
import { ref, PropType, watch } from 'vue'

type FileWithInvalidDefinitions = File & { invalidType?: boolean, invalidSize?: boolean }

const emit = defineEmits(['add', 'remove', 'remove-invalid', 'update:model-value'])

const props = defineProps({
  /**
   * An array of files. This prop is optional.
   * 
   * This syncs with the internal fileList and invalidFileList
   * to give developers more control over files.
   * 
   * Each file has `name`, `type`, `size`, `lastModified` properties.
   * 
   * You can check a file's validity using its `invalidType`
   * and `invalidSize` boolean properties. They are only
   * present if the file is invalid
   */
  modelValue: { type: Array as PropType<File[]>, default: () => [] },
  /**
   * Determines the form name to use for the upload input field.
   */
  name: { type: String, default: 'sdsFileUploader' },
  /**
   * Determines whether the user can upload more than one file.
   */
  multiple: { type: Boolean, default: false },
  /**
   * Determines if the file upload field is required.
   */
  required: { type: Boolean, default: false },
  /**
   * Determines the accepted file formats used on the upload input field.
   */
  accept: { type: String, default: undefined },
  /**
   * Determines the file types used for validation.
   */
  allowedFiletypes: { type: Array, default: () => [] },
  /**
   * Determines the maximum allowed filesize in megabytes for each uploaded file.
   */
  filesize: { type: Number, default: 10 },
  /**
   * Determines the helper text used to describe the upload field.
   */
  helperText: { type: String, default: undefined }
})

const fileInput = ref<null | HTMLInputElement>(null)
const fileList = ref<File[]>([])
const invalidFileList = ref<FileWithInvalidDefinitions[]>([])

const removeFile = (file: File) => {
  if (!fileInput.value) return

  const dt = new DataTransfer()
  fileList.value = fileList.value.filter((i) => !(
    i.name === file.name &&
    i.lastModified === file.lastModified &&
    i.size === file.size &&
    i.type === file.type
  ))
  fileList.value.forEach((i) => {
    dt.items.add(i)
  })
  fileInput.value.files = dt.files

  /**
   * Emitted when a valid file is removed.
   */
  emit('remove', { files: fileList.value, invalidFiles: invalidFileList.value })
  emit('update:model-value', [...fileList.value, ...invalidFileList.value])
}

const removeInvalidFile = (file: File) => {
  invalidFileList.value = invalidFileList.value.filter((i) => !(
    i.name === file.name &&
    i.lastModified === file.lastModified &&
    i.size === file.size &&
    i.type === file.type
  ))

  /**
   * Emitted when an invalid file is removed.
   */
  emit('remove-invalid', { files: fileList.value, invalidFiles: invalidFileList.value })
  emit('update:model-value', [...fileList.value, ...invalidFileList.value])
}

const findFile = (file: File) => {
  return fileList.value.find((i) => (
    i.name === file.name &&
    i.lastModified === file.lastModified &&
    i.size === file.size &&
    i.type === file.type
  ))
}

const processFiles = (event: Event) => {
  if (!event.target) return
  const files = (event.target as HTMLInputElement).files as FileList
  Array.from(files).forEach((file) => {
    const existingFile = findFile(file as File)
    if (!existingFile) {
      processSingleFile(file as File)
    }
  })

  /**
   * Emitted when a file or files have been added.
   */
  emit('add', { files: fileList.value, invalidFiles: invalidFileList.value })
  emit('update:model-value', [...fileList.value, ...invalidFileList.value])
}

const processSingleFile = (file: File) => {
  if (!fileInput.value) return

  const dt = new DataTransfer()
  const filesize = parseFloat(((file.size / 1024) / 1024).toFixed(4)) // MB
  const filetype = file.type
  const filetypeCheckSuccessful = (props.allowedFiletypes.length > 0 && props.allowedFiletypes.includes(filetype)) || props.allowedFiletypes.length < 1
  
  if (props.multiple) {
    fileList.value.forEach((i) => {
      dt.items.add(i)
    })
  }

  if (filesize <= props.filesize && filetypeCheckSuccessful) {
    dt.items.add(file)
    fileInput.value.files = dt.files
    fileList.value = Array.from(fileInput.value.files) || []
    if (!props.multiple) {
      invalidFileList.value = []
    }
  } else if (filesize > props.filesize) {
    if (props.multiple) {
      (file as FileWithInvalidDefinitions).invalidSize = true
      invalidFileList.value.push(file)
      invalidFileList.value = invalidFileList.value.filter((file, index, self) =>
        index === self.findIndex((i) => (
          i.name === file.name &&
          i.lastModified === file.lastModified &&
          i.size === file.size &&
          i.type === file.type
        ))
      )
    } else {
      fileList.value = []
      fileInput.value.files = dt.files;
      (file as FileWithInvalidDefinitions).invalidSize = true
      invalidFileList.value = [file]
    }
  } else if (!filetypeCheckSuccessful) {
    if (props.multiple) {
      (file as FileWithInvalidDefinitions).invalidType = true
      invalidFileList.value.push(file)
      invalidFileList.value = invalidFileList.value.filter((file, index, self) =>
        index === self.findIndex((i) => (
          i.name === file.name &&
          i.lastModified === file.lastModified &&
          i.size === file.size &&
          i.type === file.type
        ))
      )
    } else {
      fileList.value = []
      fileInput.value.files = dt.files;
      (file as FileWithInvalidDefinitions).invalidType = true
      invalidFileList.value = [file]
    }
  }
}

const byteToSize = (bytes: number): string => {
  const sizes = ['b', 'kb', 'mb', 'gb', 'tb']
  if (bytes <= 0 || bytes > 999999999999999) { return 'n/a' }
  const i = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`, 10)
  if (i === 0) { return `${bytes}${sizes[i]}` }
  return `${Math.ceil(bytes / 1024 ** i)} ${sizes[i]}`
}

watch(() => props.modelValue, value => {
  if (!fileInput.value) return
  const dt = new DataTransfer()
  value.forEach(file => dt.items.add(file))
  fileInput.value.files = dt.files
  fileList.value = []
  invalidFileList.value = []
  Array.from(dt.files).forEach(file => {
    processSingleFile(file)
  })
}, { immediate: true, deep: true })
</script>