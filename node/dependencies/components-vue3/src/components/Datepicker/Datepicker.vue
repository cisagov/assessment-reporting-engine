<template>
  <floating-ui
    data-id="sds-datepicker"
    class="w-full"
    placement="bottom"
    :disabled="disabled"
    :popper-class="`absolute bg-white border dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 shadow-lg rounded-md w-auto ${zIndexClass}`"
    arrow-class="absolute bg-white border dark:bg-gray-700 dark:border-gray-600 w-3 h-3 rotate-45"
    placement-top-arrow-class="-bottom-1.5 border-t-0 border-l-0"
    placement-right-arrow-class="-left-1.5 border-t-0 border-r-0"
    placement-bottom-arrow-class="-top-1.5 border-b-0 border-r-0"
    placement-left-arrow-class="-right-1.5 border-b-0 border-l-0"
  >
    <template #trigger="{ open, close, toggle }">
      <div
        class="flex w-full"
        :class="{ 'gap-1': size === 'sm', 'gap-2': size !== 'sm' }"
      >
        <div
          class="w-full input-group"
          :class="{ 'input-group-sm': size === 'sm' }"
        >
          <button
            type="button"
            tabindex="-1"
            class="input-group-text fill-current"
            :class="{
              'p-1': size === 'sm',
              'pointer-events-none opacity-50': disabled || readonly
            }"
            :disabled="disabled || readonly"
            @click="toggle(); ($refs.startDateInput as HTMLElement).focus()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="fill-current"
              :class="{ 'w-3 h-3': size === 'sm', 'w-4 h-4': size !== 'sm' }"
            >
              <path
                v-if="mode === 'time'"
                d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                fill="currentColor"
              />
              <path
                v-else
                d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
              />
            </svg>
          </button>
          <input
            ref="startDateInput"
            v-model="inputDate.start"
            type="text"
            class="form-control"
            :class="{ 'px-1': size === 'sm' }"
            :title="`${placeholder}`"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :required="required"
            :pattern="inputPattern"
            @focusin="open()"
            @keydown.tab="updateDatesFromInput(); close()"
            @mousedown.stop="toggle()"
            @keyup.up="close()"
            @keyup.down="open()"
            @keydown.enter.prevent="updateDatesFromInput(); toggle()"
            @change="updateDatesFromInput"
          >
        </div>
        <template v-if="isRange">
          <div
            v-if="!hideArrow"
            class="flex my-auto flex-shrink-0"
            :class="{
              'opacity-50': disabled || readonly
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="text-gray-700"
              :class="{ 'w-5 h-5': size !== 'sm', 'w-4 h-4': size === 'sm' }"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            class="w-full input-group"
            :class="{ 'input-group-sm': size === 'sm' }"
          >
            <button
              type="button"
              tabindex="-1"
              class="input-group-text fill-current"
              :class="{
                'p-1': size === 'sm',
                'pointer-events-none opacity-50': disabled || readonly
              }"
              :disabled="disabled || readonly"
              @click="toggle(); ($refs.endDateInput as HTMLElement).focus()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="fill-current"
                :class="{ 'w-3 h-3': size === 'sm', 'w-4 h-4': size !== 'sm' }"
              >
                <path
                  v-if="mode === 'time'"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                  fill="currentColor"
                />
                <path
                  v-else
                  d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                />
              </svg>
            </button>
            <input
              ref="endDateInput"
              v-model="inputDate.end"
              type="text"
              class="form-control"
              :class="{ 'px-1': size === 'sm' }"
              :title="`${placeholder}`"
              :placeholder="placeholder"
              :readonly="readonly"
              :disabled="disabled"
              :required="required"
              :pattern="inputPattern"
              @focusin="open()"
              @keydown.tab="updateDatesFromInput(); close()"
              @mousedown.stop="toggle()"
              @keyup.up="close()"
              @keyup.down="open()"
              @keydown.enter.prevent="updateDatesFromInput(); toggle()"
              @change="updateDatesFromInput"
            >
          </div>
        </template>
      </div>
    </template>
    <template #default="{ close }">
      <div class="p-4">
        <calendar
          v-model="localDate"
          :min="min"
          :max="max"
          :mode="mode"
          @update:model-value="($event: CalendarDate | CalendarRange) => focusCorrectInput($event, close)"
        />
      </div>
    </template>
  </floating-ui>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { parse, format, isValid, min, max, isBefore, isAfter, isEqual, setHours, setMinutes, setMilliseconds, setSeconds, addDays, subDays, addYears } from 'date-fns'
import Calendar from '../Calendar/Calendar.vue';
import FloatingUi from '../FloatingUi/FloatingUi.vue';

export type CalendarDate = Date | null
export interface CalendarRange {
  start: CalendarDate
  end: CalendarDate
}
export type CalendarMode = 'date' | 'dateTime' | 'time'

export default defineComponent({
  name: 'SdsDatepicker',
  components: {
    Calendar,
    FloatingUi
  },
  props: {
    /**
     * The z-index for the popover.
     */
    zIndex: { type: String as PropType<'0' | '10' | '20' | '30' | '40' | '50' | 'auto' | ''>, required: false, default: '50' },
    /**
     * Determines whether to display or hide the arrow for range selection.
     */
    hideArrow: { type: Boolean, default: false },
    /**
     * Determines the sizing of the component.
     */
    size: { type: String as PropType<'md' | 'sm' | ''>, default: 'md' },
    /**
     * Determines the mode of the component.
     */
    mode: { type: String as PropType<CalendarMode>, default: 'date' },
    /**
     * The v-model for the component.
     * 
     * For single selections, this value can be null or a date object.
     * 
     * For range selections, this is an object with start and end keys
     * that can either be null or a date object.
     * 
     * Range example:
     * 
     * **{ start: new Date(), end: null }**
     */
    modelValue: { type: [Object, Date] as PropType<CalendarRange | CalendarDate>, default: null },
    /**
     * The max date allowed for the datepicker.
     */
    max: { type: Date, default: null },
    /**
     * The min date allowed for the datepicker.
     */
    min: { type: Date, default: null },
    /**
     * Determines if the component is required.
     */
    required: { type: Boolean, default: false },
    /**
     * Determines if the component is readonly.
     */
    readonly: { type: Boolean, default: false },
    /**
     * Determines if the component is disabled.
     */
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      inputDate: { start: '', end: '' },
    }
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case '0':
          return 'z-0'
        case '10':
          return 'z-10'
        case '20':
          return 'z-20'
        case '30':
          return 'z-30'
        case '40':
          return 'z-40'
        case '50':
          return 'z-50'
        case 'auto':
          return 'z-auto'
        default:
          return ''
      }
    },
    isRange() {
      return this.modelValue && !(this.modelValue instanceof Date)
    },
    placeholder() {
      switch (this.mode) {
        case 'date':
          return 'mm/dd/yyyy'
        case 'time':
          return 'hh:mm a'
        case 'dateTime':
          return 'mm/dd/yyyy hh:mm a'
        default:
          return 'mm/dd/yyyy'
      }
    },
    inputFormat() {
      switch (this.mode) {
        case 'date':
          return 'MM/dd/yyyy'
        case 'time':
          return 'hh:mm aaa'
        case 'dateTime':
          return 'MM/dd/yyyy hh:mm aaa'
        default:
          return 'MM/dd/yyyy'
      }
    },
    inputPattern() {
      switch (this.mode) {
        case 'date':
          return '[0-9]{2}\/[0-9]{2}\/[0-9]{4}'
        case 'time':
          return '[0-9]{2}:[0-9]{2} [a|p]m'
        case 'dateTime':
          return '[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-9]{2}\:[0-9]{2} [a|p]m'
        default:
          return '[0-9]{2}\/[0-9]{2}\/[0-9]{4}'
      }
    },
    localDate: {
      get(): any {
        return this.modelValue
      },
      set(value: any) {
        /**
         * Emmitted when modelValue changes.
         */
        this.$emit('update:modelValue', value)
      }
    },
  },
  watch: {
    localDate: {
      handler(value) {
        if (this.isRange) {
          const formattedStartDate = value.start && this.formatDate(format(value.start, 'yyyy-MM-dd HH:mm:ss')) || { date: null, text: '' }
          const formattedEndDate = value.end && this.formatDate(format(value.end, 'yyyy-MM-dd HH:mm:ss')) || { date: null, text: '' }
          if (formattedStartDate.date && formattedEndDate.date && isAfter(formattedStartDate.date, formattedEndDate.date)) {
            this.inputDate = {
              start: formattedEndDate.text,
              end: formattedStartDate.text
            }
          } else {
            this.inputDate = {
              start: formattedStartDate.text,
              end: formattedEndDate.text
            }
          }
        } else {
          const formattedStartDate = value && this.formatDate(format(value, 'yyyy-MM-dd HH:mm:ss')) || { date: null, text: '' }
          this.inputDate = {
            start: formattedStartDate.text,
            end: ''
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    focusCorrectInput(value: CalendarDate | CalendarRange, close: Function) {
      if (value && value instanceof Date) {
        (this.$refs.startDateInput as HTMLElement).focus()
      } else if (value && !(value instanceof Date) && !value.start) {
        (this.$refs.startDateInput as HTMLElement).focus()
      } else if (value && !(value instanceof Date) && !value.end) {
        (this.$refs.endDateInput as HTMLElement).focus()
      } else if (value && !(value instanceof Date) && value.end) {
        (this.$refs.endDateInput as HTMLElement).focus()
      } else {
        (this.$refs.startDateInput as HTMLElement).focus()
      }

      if (this.mode === 'date') {
        this.$nextTick(() => {
          if (this.isRange && this.inputDate.start && this.inputDate.end) {
            close()
          } else if (!this.isRange && this.inputDate.start) {
            close()
          }
        })
      }
    },
    updateDatesFromInput() {
      if (this.isRange) {
        const formattedStartDate = this.formatDate(this.inputDate.start)
        const formattedEndDate = this.formatDate(this.inputDate.end)
        this.localDate = {
          start: formattedStartDate.date && formattedEndDate.date && min([formattedStartDate.date, formattedEndDate.date]) || formattedStartDate.date,
          end: formattedStartDate.date && formattedEndDate.date && max([formattedStartDate.date, formattedEndDate.date]) || formattedEndDate.date
        }
        if (formattedStartDate.date && formattedEndDate.date && isAfter(formattedStartDate.date, formattedEndDate.date)) {
          this.inputDate = {
            start: formattedEndDate.text,
            end: formattedStartDate.text
          }
        } else {
          this.inputDate = {
            start: formattedStartDate.text,
            end: formattedEndDate.text
          }
        }
      } else {
        const formattedStartDate = this.formatDate(this.inputDate.start)
        this.localDate = formattedStartDate.date
        this.inputDate = {
          start: formattedStartDate.text,
          end: ''
        }
      }
    },
    formatDate(dateString: string) {
      if (dateString === 'now') {
        const date = new Date()
        return { date, text: format(date, this.inputFormat) }
      } else if (dateString === 'today') {
        const date = setHours(setMinutes(setSeconds(setMilliseconds(new Date(), 0), 0), 0), 0)
        return { date, text: format(date, this.inputFormat) }
      } else if (dateString === 'tomorrow') {
        const date = addDays(setHours(setMinutes(setSeconds(setMilliseconds(new Date(), 0), 0), 0), 0), 1)
        return { date, text: format(date, this.inputFormat) }
      } else if (dateString === 'yesterday') {
        const date = subDays(setHours(setMinutes(setSeconds(setMilliseconds(new Date(), 0), 0), 0), 0), 1)
        return { date, text: format(date, this.inputFormat) }
      }

      const formats = [
        'MM/dd/yyyy hh:mm aaa',
        'MM/dd/yyyy hh:mm a',
        'MM/dd/yyyy h:mm aaa',
        'MM/dd/yyyy h:mm a',
        'MM/dd/yyyy hh:mmaaa',
        'MM/dd/yyyy hh:mma',
        'MM/dd/yyyy h:mmaaa',
        'MM/dd/yyyy h:mma',
        'MM/dd/yyyy H:mm',
        'MM/dd/yyyy HH:mm',
        'MM/dd/yyyy HH:mm:ss',
        'MM-dd-yyyy hh:mm aaa',
        'MM-dd-yyyy hh:mm a',
        'MM-dd-yyyy h:mm aaa',
        'MM-dd-yyyy h:mm a',
        'MM-dd-yyyy ha',
        'MM-dd-yyyy haaa',
        'MM-dd-yyyy hh:mmaaa',
        'MM-dd-yyyy hh:mma',
        'MM-dd-yyyy h:mmaaa',
        'MM-dd-yyyy h:mma',
        'MM-dd-yyyy H:mm',
        'MM-dd-yyyy HH:mm',
        'MM-dd-yyyy HH:mm:ss',
        'yyyy-MM-dd hh:mm aaa',
        'yyyy-MM-dd hh:mm a',
        'yyyy-MM-dd h:mm aaa',
        'yyyy-MM-dd h:mm a',
        'yyyy-MM-dd hh:mma',
        'yyyy-MM-dd h:mmaaa',
        'yyyy-MM-dd h:mma',
        'yyyy-MM-dd H:mm',
        'yyyy-MM-dd HH:mm',
        'yyyy-MM-dd HH:mm:ss',
        'MM/dd/yyyy',
        'MM-dd-yyyy',
        'yyyy-MM-dd',
        'M/d',
        'MM/dd',
        'MM/yyyy',
        'M-d',
        'MM-dd',
        'MM-yyyy',
        'yyyy/MM',
        'yyyy-MM',
        'M/dd/yyyy hh:mm aaa',
        'M/dd/yyyy hh:mm a',
        'M/dd/yyyy h:mm aaa',
        'M/dd/yyyy h:mm a',
        'M/dd/yyyy ha',
        'M/dd/yyyy haaa',
        'M/dd/yyyy hh:mmaaa',
        'M/dd/yyyy hh:mma',
        'M/dd/yyyy h:mmaaa',
        'M/dd/yyyy h:mma',
        'M/dd/yyyy H:mm',
        'M/dd/yyyy HH:mm',
        'M/dd/yyyy HH:mm:ss',
        'M-dd-yyyy hh:mm aaa',
        'M-dd-yyyy hh:mm a',
        'M-dd-yyyy h:mm aaa',
        'M-dd-yyyy h:mm a',
        'M-dd-yyyy hh:mmaaa',
        'M-dd-yyyy hh:mma',
        'M-dd-yyyy h:mmaaa',
        'M-dd-yyyy h:mma',
        'M-dd-yyyy H:mm',
        'M-dd-yyyy HH:mm',
        'M-dd-yyyy HH:mm:ss',
        'yyyy-M-dd hh:mm aaa',
        'yyyy-M-dd hh:mm a',
        'yyyy-M-dd h:mm aaa',
        'yyyy-M-dd h:mm a',
        'yyyy-M-dd hh:mma',
        'yyyy-M-dd h:mmaaa',
        'yyyy-M-dd h:mma',
        'yyyy-M-dd H:mm',
        'yyyy-M-dd HH:mm',
        'yyyy-M-dd HH:mm:ss',
        'yyyy-M-dd',
        'M/yyyy',
        'M-yyyy',
        'M/yyyy haaa',
        'M-yyyy haaa',
        'M/yyyy ha',
        'M/yyyy HH:mm:ss',
        'M-yyyy HH:mm:ss',
        'M.yyyy HH:mm:ss',
        'M-yyyy ha',
        'M/yyyy h:mmaaa',
        'M-yyyy h:mmaaa',
        'M/yyyy h:mma',
        'M-yyyy h:mma',
        'M/yyyy h:mm aaa',
        'M-yyyy h:mm aaa',
        'M/yyyy h:mm a',
        'M-yyyy h:mm a',
        'yyyy/M',
        'yyyy-M',
        'yyyy',
        'EEE',
        'EEEE',
        'LLL',
        'LLLL',
        'LLL yyyy',
        'LLLL yyyy',
        'LLL dd yyyy',
        'LLLL dd yyyy',
        'hh:mm aaa',
        'hh:mm a',
        'h:mm aaa',
        'h:mm a',
        'hh:mmaaa',
        'hh:mma',
        'h:mmaaa',
        'h:mma',
        'HH:mm:ss',
        'H:mm',
        'HH:mm',
        'QQQ',
        'QQQQ',
        'QQQ yyyy',
        'QQQQ yyyy',
        'PP',
        'PPP',
        'PPPP',
        'bbb',
        'h BBB',
        'h:mm BBB',
        'hh BBB',
        'hh:mm BBB',
        'hBBB',
        'h:mmBBB',
        'hhBBB',
        'hh:mmBBB'
      ]

      // validate the format and store the found format for later processing
      let foundFormat
      const validDates = formats.filter((format) => {
        const valid = isValid(parse(dateString, format, new Date()))
        if (valid) foundFormat = format
        return valid
      })

      if (validDates.length > 0) {
        let date = parse(dateString, validDates[0], new Date())
        if (this.mode === 'date') {
          date = setHours(setMinutes(setSeconds(setMilliseconds(date, 0), 0), 0), 0)
        } else if (this.mode === 'time') {
          const time = format(date, 'HH:mm:ss')
          const days = format(new Date(), 'yyyy-MM-dd')
          date = parse(`${days} ${time}`, 'yyyy-MM-dd HH:mm:ss', new Date())
        }

        // Fix double-digit year issue using foundFormat and full year value
        const fullYear = date.getFullYear()
        if (foundFormat === 'LLLL dd yyyy' && fullYear < 1000) {
          date = addYears(date, 2000)
        }

        const dateIsBeforeMin = isBefore(date, this.min)
        const dateIsAfterMax = isAfter(subDays(date, 1), this.max)
        const dateEqualsMax = isEqual(subDays(date, 1), this.max)
        if (!dateIsBeforeMin && !dateIsAfterMax && !dateEqualsMax) {
          return { date, text: format(date, this.inputFormat) }
        }
      }
      return { date: null, text: '' }
    }
  }
})
</script>