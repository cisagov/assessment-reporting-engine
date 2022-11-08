<template>
  <div
    data-id="sds-calendar"
    class="select-none"
  >
    <div v-if="showCalendars">
      <template v-if="view === 'days'">
        <div
          class="flex relative gap-1 mb-2 w-56"
          :class="{ 'sm:w-120': isRange }"
        >
          <button
            class="absolute left-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50"
            type="button"
            tabindex="-1"
            :disabled="!canGoToPrevMonth"
            @click="goToPrevMonth"
          >
            <span class="sr-only">Go to previous month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="w-5 h-5"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M328 112L184 256l144 144"
            /></svg>
          </button>
          <div class="flex-grow">
            <button
              class="m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100"
              type="button"
              tabindex="-1"
              @click="view = 'years'"
            >
              <span>{{ calendarMonthTitle }} {{ calendarYearTitle }}</span>
            </button>
          </div>
          <div
            v-if="isRange"
            class="hidden flex-grow sm:block"
          >
            <button
              class="m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100"
              type="button"
              tabindex="-1"
              @click="view = 'years'"
            >
              <span>{{ calendarNextMonthTitle }} {{ calendarNextYearTitle }}</span>
            </button>
          </div>
          <button
            class="absolute right-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50"
            type="button"
            tabindex="-1"
            :disabled="!canGoToNextMonth"
            @click="goToNextMonth"
          >
            <span class="sr-only">Go to next month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="w-5 h-5"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M184 112l144 144l-144 144"
            /></svg>
          </button>
        </div>
        <div
          class="flex flex-col sm:flex-row sm:gap-8"
        >
          <div class="grid grid-cols-7 w-56 h-60 place-content-start">
            <div
              v-for="day in calendarDaysOfWeek"
              :key="day"
              class="text-sm font-bold text-gray-400 text-center uppercase mb-1"
            >
              {{ day.charAt(0) }}
            </div>
            <div
              v-for="day of calendarDaysInMonth"
              :key="day"
              :class="[
                'w-8 h-8 mb-1',
                day === 1 ? `col-start-${calendarStartOfMonth}` : '',
                dateIsWithinInterval(day) ? 'bg-blue-200 dark:bg-blue-800' : '',
                dateIsAtStartOfInterval(day) ? 'bg-blue-200 dark:bg-blue-800 rounded-l-full' : '',
                dateIsAtEndOfInterval(day) ? 'bg-blue-200 dark:bg-blue-800 rounded-r-full' : '',
              ]"
            >
              <button
                class="disabled:pointer-events-none disabled:opacity-25"
                type="button"
                tabindex="-1"
                :class="{
                  'px-2 py-1 w-8 h-8 rounded-full text-sm': true,
                  'hover:bg-gray-300 dark:hover:bg-gray-600': !dateIsSameDay(day),
                  'font-bold bg-blue-500 text-white': dateIsSameDay(day),
                  'font-bold text-blue-500 bg-gray-100 dark:text-blue-100 dark:bg-gray-800': dateIsToday(day) && !dateIsSameDay(day) && !dateIsWithinInterval(day),
                  'font-semibold text-blue-900 dark:text-blue-100': dateIsWithinInterval(day) && !dateIsSameDay(day)
                }"
                :disabled="dateIsNotSelectable(day)"
                :title="dateIsToday(day) ? 'Today' : ''"
                @click="setModelValueDate(day)"
              >
                {{ day }}
              </button>
            </div>
          </div>

          <template v-if="isRange">
            <div class="hidden sm:grid grid-cols-7 w- place-content-start">
              <div
                v-for="day in calendarDaysOfWeek"
                :key="day"
                class="text-sm font-bold text-gray-400 text-center uppercase mb-1"
              >
                {{ day.charAt(0) }}
              </div>
              <div
                v-for="day of calendarNextDaysInMonth"
                :key="day"
                :class="[
                  'w-8 h-8 mb-1',
                  day === 1 ? `col-start-${calendarNextStartOfMonth}` : '',
                  dateIsWithinInterval(day, true) ? 'bg-blue-200 dark:bg-blue-800' : '',
                  dateIsAtStartOfInterval(day, true) ? 'bg-blue-200 dark:bg-blue-800 rounded-l-full' : '',
                  dateIsAtEndOfInterval(day, true) ? 'bg-blue-200 dark:bg-blue-800 rounded-r-full' : '',
                ]"
              >
                <button
                  class="disabled:pointer-events-none disabled:opacity-25"
                  type="button"
                  tabindex="-1"
                  :class="{
                    'px-2 py-1 w-8 h-8 rounded-full text-sm': true,
                    'hover:bg-gray-300 dark:hover:bg-gray-600': !dateIsSameDay(day, true),
                    'font-bold bg-blue-500 text-white': dateIsSameDay(day, true),
                    'font-bold text-blue-500 bg-gray-100 dark:text-blue-400 dark:bg-gray-100': dateIsToday(day, true) && !dateIsSameDay(day, true) && !dateIsWithinInterval(day, true),
                    'font-semibold text-blue-900 dark:text-blue-100': dateIsWithinInterval(day, true) && !dateIsSameDay(day, true)
                  }"
                  :disabled="dateIsNotSelectable(day, true)"
                  :title="dateIsToday(day, true) ? 'Today' : ''"
                  @click="setModelValueDate(day, true)"
                >
                  {{ day }}
                </button>
              </div>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <div
          class="grid gap-1 w-56"
          :class="{ 'sm:w-120': isRange }"
        >
          <div>
            <div class="mb-1 text-sm uppercase font-semibold text-gray-500">
              Month
            </div>
            <select
              v-model="calendarMonthSelect"
              class="form-control form-control-sm"
            >
              <option
                v-for="month of calendarMonths"
                :key="month"
              >
                {{ month }}
              </option>
            </select>
          </div>
          <div class="mt-1">
            <div class="mb-1 text-sm uppercase font-semibold text-gray-500">
              Year
            </div>
            <select
              v-model="calendarYearSelect"
              class="form-control form-control-sm"
            >
              <option
                v-for="year of calendarYears"
                :key="year"
              >
                {{ year }}
              </option>
            </select>
          </div>
          <button
            class="mt-2 btn btn-primary btn-sm"
            type="button"
            tabindex="-1"
            @click="goToSelectedMonth()"
          >
            Go to Date
          </button>
          <button
            class="mt-2 btn btn-default btn-sm"
            type="button"
            tabindex="-1"
            @click="goToThisMonth()"
          >
            Go to Today
          </button>
          <hr class="my-2">
          <button
            class="btn btn-default btn-sm"
            type="button"
            tabindex="-1"
            @click="view = 'days'"
          >
            Cancel
          </button>
        </div>
      </template>
    </div>

    <!-- Time pickers -->
    <div
      v-if="showTime && view === 'days'"
      :class="{ 'sm:flex sm:gap-8 sm:w-120': showCalendars && isRange }"
    >
      <div
        class="w-56"
        :class="{ 'border-t my-2 pt-2 border-t': showCalendars }"
      >
        <div
          class="uppercase text-sm text-gray-500 mb-2"
        >
          <template v-if="date && date instanceof Date">
            {{ formatDate(date, 'eee MMM dd yyyy') }}
          </template>
          <template v-else-if="date && !(date instanceof Date) && date.start instanceof Date">
            {{ formatDate(date.start, 'eee MMM dd yyyy') }}
          </template>
          <template v-else>
            --
          </template>
        </div>
        <div class="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
              fill="currentColor"
            />
          </svg>
          <select
            v-model="startTimeHour"
            :disabled="!startTimeHour"
            class="form-control form-control-sm"
            @change="changeTime('hour', ($event.target as HTMLSelectElement).value)"
          >
            <option
              v-for="hour of getCalendarHours"
              :key="hour"
            >
              {{ hour }}
            </option>
          </select>
          <span class="my-auto">:</span>
          <select
            v-model="startTimeMinutes"
            :disabled="!startTimeMinutes"
            class="form-control form-control-sm"
            @change="changeTime('minutes', ($event.target as HTMLSelectElement).value)"
          >
            <option
              v-for="minutes of getCalendarMinutes"
              :key="minutes"
            >
              {{ minutes }}
            </option>
          </select>
          <select
            v-model="startTimeMeridian"
            :disabled="!startTimeMeridian"
            class="form-control form-control-sm"
            @change="changeTime('meridian', ($event.target as HTMLSelectElement).value)"
          >
            <option
              v-for="meridian of getCalendarMeridian"
              :key="meridian"
            >
              {{ meridian }}
            </option>
          </select>
        </div>
      </div>
      <div
        v-if="isRange"
        class="border-t my-2 pt-2 border-t w-56"
      >
        <div
          class="uppercase text-sm text-gray-500 mb-2"
        >
          <template v-if="date && !(date instanceof Date) && date.end instanceof Date">
            {{ formatDate(date.end, 'eee MMM dd yyyy') }}
          </template>
          <template v-else>
            --
          </template>
        </div>
        <div class="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
              fill="currentColor"
            />
          </svg>
          <select
            v-model="endTimeHour"
            :disabled="!endTimeHour"
            class="form-control form-control-sm"
            @change="changeTime('hour', ($event.target as HTMLSelectElement).value, true)"
          >
            <option
              v-for="hour of getCalendarHours"
              :key="hour"
            >
              {{ hour }}
            </option>
          </select>
          <span class="my-auto">:</span>
          <select
            v-model="endTimeMinutes"
            :disabled="!endTimeMinutes"
            class="form-control form-control-sm"
            @change="changeTime('minutes', ($event.target as HTMLSelectElement).value, true)"
          >
            <option
              v-for="minutes of getCalendarMinutes"
              :key="minutes"
            >
              {{ minutes }}
            </option>
          </select>
          <select
            v-model="endTimeMeridian"
            :disabled="!endTimeMeridian"
            class="form-control form-control-sm"
            @change="changeTime('meridian', ($event.target as HTMLSelectElement).value, true)"
          >
            <option
              v-for="meridian of getCalendarMeridian"
              :key="meridian"
            >
              {{ meridian }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export type CalendarDate = Date | null
export interface CalendarRange {
  start: CalendarDate
  end: CalendarDate
}
export type CalendarMode = 'date' | 'dateTime' | 'time'

export default {
  name: 'SdsCalendar'
}
</script>

<script lang="ts" setup>
import { isWithinInterval, isBefore, isAfter, isEqual, isDate, min, max, isSameDay, getDaysInMonth, startOfMonth, getDay, getHours, setDate, setHours, setMinutes, setSeconds, setMilliseconds, subMonths, addMonths, format, endOfDay } from 'date-fns'
import { ref, computed, watch, PropType, onMounted, nextTick } from 'vue'

const props = defineProps({
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
  modelValue: { type: [Object, Date] as PropType<CalendarDate | CalendarRange>, default: new Date() },
  /**
   * Determines the mode in which the calendar will function.
   * 
   * Options include 'date', 'dateTime', and 'time'.
   */
  mode: { type: String as PropType<CalendarMode>, default: 'date' },
  /**
   * Determines the minimum selectable date for this component.
   */
  min: { type: Date as PropType<CalendarDate>, default: null },
  /**
   * Determines the maximum selectable date for this component.
   */
  max: { type: Date as PropType<CalendarDate>, default: null }
})

const emit = defineEmits(['update:modelValue'])

const date = computed<CalendarDate | CalendarRange>({
  get() {
    return props.modelValue
  },
  set(value) {
    /**
     * Emitted when modelValue changes.
     */
    emit('update:modelValue', value)
  }
})

const displayedMonth = ref(new Date())
const calendarDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const calendarYears = [...Array(200).keys()].map((i) => i + 1900)
const calendarMonthTitle = computed(() => format(displayedMonth.value, 'MMMM'))
const calendarYearTitle = computed(() => format(displayedMonth.value, 'yyyy'))
const calendarStartOfMonth = computed(() => getDay(startOfMonth(displayedMonth.value)) + 1)
const calendarDaysInMonth = computed(() => getDaysInMonth(displayedMonth.value))

const displayedNextMonth = ref(addMonths(displayedMonth.value, 1))
const calendarNextMonthTitle = computed(() => format(displayedNextMonth.value, 'MMMM'))
const calendarNextYearTitle = computed(() => format(displayedNextMonth.value, 'yyyy'))
const calendarNextStartOfMonth = computed(() => getDay(startOfMonth(displayedNextMonth.value)) + 1)
const calendarNextDaysInMonth = computed(() => getDaysInMonth(displayedNextMonth.value))

const view = ref('days')
const calendarMonthSelect = ref<string | null>(null)
const calendarYearSelect = ref<string | null>(null)

const setCalendarSelectMonthAndYear = () => {
  calendarMonthSelect.value = format(displayedMonth.value, 'MMMM')
  calendarYearSelect.value = format(displayedMonth.value, 'yyyy')
}

watch(() => view.value, () => {
  setCalendarSelectMonthAndYear()
})

const showCalendars = computed(() => {
  return props.mode === 'date' || props.mode === 'dateTime'
})

const showTime = computed(() => {
  return props.mode === 'dateTime' || props.mode === 'time'
})

const startTimeHour = ref<string | null>(null)
const startTimeMinutes = ref<string | null>(null)
const startTimeMeridian = ref<string | null>(null)
const endTimeHour = ref<string | null>(null)
const endTimeMinutes = ref<string | null>(null)
const endTimeMeridian = ref<string | null>(null)

onMounted(() => {
  initTimeMode()
  moveToStartDate()
  nextTick(() => {
    updateTimeSelects()
  })
})

watch(() => props.modelValue, () => {
  updateTimeSelects()
})

const initTimeMode = () => {
  if (props.mode === 'time') {
    if (!date.value || (!(date.value instanceof Date) && (!date.value.start || !date.value.end))) {
      const now = setHours(setMinutes(setSeconds(setMilliseconds(new Date(), 0), 0), 0), 0)
      if (isRange.value) {
        date.value = {
          start: now,
          end: now
        }
      } else {
        date.value = now
      }
    }
  }
}

const moveToStartDate = () => {
  if (date.value && !(date.value instanceof Date) && date.value.start instanceof Date) {
    displayedMonth.value = date.value.start
  } else if (date.value && date.value instanceof Date) {
    displayedMonth.value = date.value
  } else if (props.min && props.min instanceof Date && isAfter(props.min, new Date())) {
    displayedMonth.value = props.min
  }
  displayedNextMonth.value = addMonths(displayedMonth.value, 1)
}

const updateTimeSelects = () => {
  if (isRange.value) {
    if (date.value && !(date.value instanceof Date) && date.value.start instanceof Date) {
      startTimeHour.value = formatDate(date.value.start, 'hh')
      startTimeMinutes.value = formatDate(date.value.start, 'mm')
      startTimeMeridian.value = getHours(date.value.start) > 11 ? 'pm' : 'am'
    } else {
      startTimeHour.value = null
      startTimeMinutes.value = null
      startTimeMeridian.value = null
    }
    if (date.value && !(date.value instanceof Date) && date.value.end instanceof Date) {
      endTimeHour.value = formatDate(date.value.end, 'hh')
      endTimeMinutes.value = formatDate(date.value.end, 'mm')
      endTimeMeridian.value = getHours(date.value.end) > 11 ? 'pm' : 'am'
    } else {
      endTimeHour.value = null
      endTimeMinutes.value = null
      endTimeMeridian.value = null
    }
  } else if (date.value instanceof Date) {
    startTimeHour.value = formatDate(date.value, 'hh')
    startTimeMinutes.value = formatDate(date.value, 'mm')
    startTimeMeridian.value = getHours(date.value) > 11 ? 'pm' : 'am'
  } else {
    startTimeHour.value = null
    startTimeMinutes.value = null
    startTimeMeridian.value = null
  }
}

const changeTime = (interval: 'hour' | 'minutes' | 'meridian', value: string, isEndOfRange = false) => {
  switch (interval) {
    case 'hour':
      if (isRange.value) {
        if (!isEndOfRange && date.value && !(date.value instanceof Date) && date.value.start instanceof Date) {
          const currentHour = getHours(date.value.start)
          const hours = currentHour > 12 ? parseInt(value) + 12 : parseInt(value)
          date.value.start = setHours(date.value.start, hours)
        } else if (isEndOfRange && date.value && !(date.value instanceof Date) && date.value.end instanceof Date) {
          const currentHour = getHours(date.value.end)
          const hours = currentHour > 12 ? parseInt(value) + 12 : parseInt(value)
          date.value.end = setHours(date.value.end, hours)
        }
      } else if (date.value instanceof Date) {
        const currentHour = getHours(date.value)
        const hours = currentHour > 12 ? parseInt(value) + 12 : parseInt(value)
        date.value = setHours(date.value, hours)
      }
      break
    case 'minutes':
      if (isRange.value) {
        if (!isEndOfRange && date.value && !(date.value instanceof Date) && date.value.start instanceof Date) {
          date.value.start = setMinutes(date.value.start, parseInt(value))
        } else if (isEndOfRange && date.value && !(date.value instanceof Date) && date.value.end instanceof Date) {
          date.value.end = setMinutes(date.value.end, parseInt(value))
        }
      } else if (date.value instanceof Date) {
        date.value = setMinutes(date.value, parseInt(value))
      }
      break
    case 'meridian':
      if (isRange.value) {
        if (!isEndOfRange && date.value && !(date.value instanceof Date) && date.value.start instanceof Date) {
          const currentHour = getHours(date.value.start)
          let hours = value === 'am' && currentHour >= 12 ? currentHour - 12 : value === 'pm' && currentHour < 12 ? currentHour + 12 : currentHour
          date.value.start = setHours(date.value.start, hours)
        } else if (isEndOfRange && date.value && !(date.value instanceof Date) && date.value.end instanceof Date) {
          const currentHour = getHours(date.value.end)
          let hours = value === 'am' && currentHour >= 12 ? currentHour - 12 : value === 'pm' && currentHour < 12 ? currentHour + 12 : currentHour
          date.value.end = setHours(date.value.end, hours)
        }
      } else if (date.value instanceof Date) {
        const currentHour = getHours(date.value)
        let hours = value === 'am' && currentHour >= 12 ? currentHour - 12 : value === 'pm' && currentHour < 12 ? currentHour + 12 : currentHour
        date.value = setHours(date.value, hours)
      }
      break
    default:
      break
  }

  if (isRange.value && date.value && !(date.value instanceof Date) && date.value.start instanceof Date && date.value.end instanceof Date) {
    date.value = {
      start: min([date.value.start, date.value.end]),
      end: max([date.value.start, date.value.end])
    }
  }
}

const getCalendarHours = computed(() => {
  const hours = [...Array(12).keys()]
  return hours.map(i => (i + 1).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }))
})

const getCalendarMinutes = computed(() => {
  const minutes = [...Array(60).keys()]
  return minutes.map(i => i.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }))
})

const getCalendarMeridian = computed(() => {
  return ['am', 'pm']
})

const goToPrevMonth = () => {
  displayedMonth.value = subMonths(displayedMonth.value, 1)
  displayedNextMonth.value = subMonths(displayedNextMonth.value, 1)
}
const goToNextMonth = () => {
  displayedMonth.value = addMonths(displayedMonth.value, 1)
  displayedNextMonth.value = addMonths(displayedNextMonth.value, 1)
}
const goToSelectedMonth = () => {
  if (!calendarMonthSelect.value || !calendarYearSelect.value) return
  const monthIndex = calendarMonths.findIndex((i) => i === calendarMonthSelect.value) + 1
  if (typeof monthIndex === 'number') {
    displayedMonth.value = new Date(parseInt(calendarYearSelect.value), monthIndex, 0, 0, 0, 0, 0)
    displayedNextMonth.value = addMonths(displayedMonth.value, 1)
    view.value = 'days'
  }
}
const goToThisMonth = () => {
  displayedMonth.value = new Date()
  displayedNextMonth.value = addMonths(displayedMonth.value, 1)
  view.value = 'days'
}
const canGoToPrevMonth = computed(() => {
  if (!(props.min instanceof Date)) return true
  return isBefore(startOfMonth(props.min), startOfMonth(displayedMonth.value))
})
const canGoToNextMonth = computed(() => {
  if (!(props.max instanceof Date)) return true
  return isAfter(startOfMonth(props.max), startOfMonth(displayedMonth.value))
})

const formatDate = (date: Date, output: string) => format(date, output)
const isRange = computed(() => props.modelValue && !isDate(props.modelValue))

const setModelValueDate = (day: number, isNextMonth = false) => {
  const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
  if (isRange.value && date.value) {
    if ((date.value as CalendarRange).end || !(date.value as CalendarRange).start) {
      (date.value as CalendarRange) = {
        start: setHours(setMinutes(setSeconds(setMilliseconds(setDate(month, day), 0), 0), 0), 0),
        end: null
      }
    } else {
      if (
        !(date.value instanceof Date) &&
        (isDate(date.value.start) && date.value.start instanceof Date)
      ) {
        const start = date.value.start
        const end = endOfDay(setDate(month, day))
        if (isSameDay(start, end) && isAfter(end, start)) {
          date.value = { start, end }
        } else {
          const minDate = min([start, end])
          const maxDate = max([start, end])
          date.value = {
            start: isEqual(start, minDate) ? minDate : setHours(setMinutes(setSeconds(setMilliseconds(minDate, 0), 0), 0), 0),
            end: maxDate
          }
        }
      } else {
        (date.value as CalendarRange).end = setHours(setMinutes(setSeconds(setMilliseconds(setDate(month, day), 0), 0), 0), 0)
      }
    }
  } else {
    date.value = setHours(setMinutes(setSeconds(setMilliseconds(setDate(month, day), 0), 0), 0), 0)
  }

  nextTick(() => {
    updateTimeSelects()
  })
}
const dateIsBeforeMin = (day: number, isNextMonth = false) => {
  if (!(props.min instanceof Date)) return false
  const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
  return isBefore(setDate(month, day), setHours(setMinutes(setSeconds(setMilliseconds(props.min, 0), 0), 0), 0))
}
const dateIsAfterMax = (day: number, isNextMonth = false) => {
  if (!(props.max instanceof Date)) return false
  const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
  const date = setDate(month, day - 1)
  const startOfMax = setHours(setMinutes(setSeconds(setMilliseconds(props.max, 0), 0), 0), 0)
  return isAfter(date, startOfMax) || isEqual(date, startOfMax)
}
const dateIsNotSelectable = (day: number, isNextMonth = false) => {
  return dateIsBeforeMin(day, isNextMonth) || dateIsAfterMax(day, isNextMonth)
}
const dateIsWithinInterval = (day: number, isNextMonth = false) => {
  const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
  if (
    date.value &&
    !(date.value instanceof Date) &&
    (
      isDate(date.value.start) && date.value.start instanceof Date &&
      isDate(date.value.end) && date.value.end instanceof Date
    )
  ) {
    return isWithinInterval(
      setDate(month, day),
      { start: date.value.start, end: date.value.end }
    )
  }
  return false
}
const dateIsAtStartOfInterval = (day: number, isNextMonth = false) => {
  const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
  if (
    date.value &&
    !(date.value instanceof Date) &&
    (
      isDate(date.value.start) && date.value.start instanceof Date &&
      isDate(date.value.end) && date.value.end instanceof Date
    )
  ) {
    return isSameDay(setDate(month, day), date.value.start)
  }
  return false
}
const dateIsAtEndOfInterval = (day: number, isNextMonth = false) => {
  const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
  if (
    date.value &&
    !(date.value instanceof Date) &&
    (
      isDate(date.value.start) && date.value.start instanceof Date &&
      isDate(date.value.end) && date.value.end instanceof Date
    )
  ) {
    return isSameDay(setDate(month, day), date.value.end)
  }
  return false
}
const dateIsSameDay = (day: number, isNextMonth = false) => {
  // is null
  if (!date.value) {
    return false
  }

  // is a date
  else if (isDate(date.value) && date.value instanceof Date) {
    const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
    return isSameDay(setDate(month, day), date.value)
  }

  // is an object (range date)
  else if (
    !(date.value instanceof Date) &&
    (
      isDate(date.value.start) && date.value.start instanceof Date ||
      isDate(date.value.end) && date.value.end instanceof Date
    )
  ) {
    const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
    return (isDate(date.value.start) && date.value.start instanceof Date && isSameDay(setDate(month, day), date.value.start)) || (isDate(date.value.end) && date.value.end instanceof Date && isSameDay(setDate(month, day), date.value.end))
  }
}
const dateIsToday = (day: number, isNextMonth = false) => {
  const month = isNextMonth ? displayedNextMonth.value : displayedMonth.value
  return isSameDay(setDate(month, day), new Date())
}
</script>
