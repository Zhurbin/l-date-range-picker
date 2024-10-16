This component wraps **[DefinedRange](#definedrange)** and **[Calendar](#calendar)** components together, and extends all the props of them.

#### Example: Default view

```jsx inside Markdown
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { useState } from 'react';
import { createStaticRanges } from 'date-range-picker';

const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    // color: '#E4F7FB',
    key: 'selection'
  }
]);

const getStaticRanges = () => createStaticRanges([
  {
    label: 'Today',
    range: () => ({
      startDate: startOfDay(new Date()),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 2 days',
    range: () => ({
      startDate: startOfDay(addDays(new Date(), -1)),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 7 days',
    range: () => ({
      startDate: addDays(new Date(), -6),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 30 days',
    range: () => ({
      startDate: addDays(new Date(), -29),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Custom range',
    range: () => ({
      startDate: undefined,
      endDate: undefined,
    }),
    isSelected: (range) => {
      if (!range.startDate && !range.endDate) {
        return true;
      }

      return false;
    },
  },
]);

<DateRangePicker
  ranges={state}
  months={1}
  direction='vertical'
  scroll={{
    enabled: true,
    calendarHeight: 257,
  }}
  moveRangeOnFirstSelection={false}
  navigatorRenderer={(() => {})}
  editableDateInputs
  onChange={item => setState([item.selection])}
  inputRanges={[]}
  staticRanges={getStaticRanges()}
/>;
```

#### Example: With error

```jsx inside Markdown
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { useState } from 'react';
import { createStaticRanges } from 'date-range-picker';

const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    // color: '#E4F7FB',
    key: 'selection'
  }
]);

const getStaticRanges = () => createStaticRanges([
  {
    label: 'Today',
    range: () => ({
      startDate: startOfDay(new Date()),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 2 days',
    range: () => ({
      startDate: startOfDay(addDays(new Date(), -1)),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 7 days',
    range: () => ({
      startDate: addDays(new Date(), -6),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 30 days',
    range: () => ({
      startDate: addDays(new Date(), -29),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Custom range',
    range: () => ({
      startDate: undefined,
      endDate: undefined,
    }),
    isSelected: (range) => {
      if (!range.startDate && !range.endDate) {
        return true;
      }

      return false;
    },
  },
]);

<DateRangePicker
  ranges={state}
  months={1}
  direction='vertical'
  scroll={{
    enabled: true,
    calendarHeight: 257,
  }}
  moveRangeOnFirstSelection={false}
  navigatorRenderer={(() => {})}
  editableDateInputs
  onChange={item => setState([item.selection])}
  inputRanges={[]}
  staticRanges={getStaticRanges()}
  endError={'The length of the period should not exceed 30 days.'}
/>;
```

#### Example: Wide view

```jsx inside Markdown
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { useState } from 'react';
import { createStaticRanges } from 'date-range-picker';

const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    // color: '#E4F7FB',
    key: 'selection'
  }
]);

const getStaticRanges = () => createStaticRanges([
  {
    label: 'Today',
    range: () => ({
      startDate: startOfDay(new Date()),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 2 days',
    range: () => ({
      startDate: startOfDay(addDays(new Date(), -1)),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 7 days',
    range: () => ({
      startDate: addDays(new Date(), -6),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Last 30 days',
    range: () => ({
      startDate: addDays(new Date(), -29),
      endDate: endOfDay(new Date()),
    }),
  },
  {
    label: 'Custom range',
    range: () => ({
      startDate: undefined,
      endDate: undefined,
    }),
    isSelected: (range) => {
      if (!range.startDate && !range.endDate) {
        return true;
      }

      return false;
    },
  },
]);

<DateRangePicker
  ranges={state}
  months={1}
  direction='vertical'
  scroll={{
    enabled: true,
    calendarHeight: 257,
  }}
  moveRangeOnFirstSelection={false}
  navigatorRenderer={(() => {})}
  editableDateInputs
  onChange={item => setState([item.selection])}
  inputRanges={[]}
  staticRanges={getStaticRanges()}
  monthStyle={{
    width: '300px',
  }}
/>;
```

#### Example: 2 Month View

```jsx inside Markdown
import { addDays } from 'date-fns';
import { useState } from 'react';

const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);

<DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
/>;
```

#### Example: Backwards 2 Month View with preventSnapRefocus

```jsx inside Markdown
import { addDays } from 'date-fns';
import { useState } from 'react';

const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);

<DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
  preventSnapRefocus={true}
  calendarFocus="backwards"
/>;
```

#### Example: Vertical Infinite

```jsx inside Markdown
import { addDays } from 'date-fns';
import { useState } from 'react';

const [state, setState] = useState({
  selection: {
    startDate: new Date(),
    endDate: null,
    key: 'selection'
  },
  compare: {
    startDate: new Date(),
    endDate: addDays(new Date(), 3),
    key: 'compare'
  }
});

<DateRangePicker
  onChange={item => setState({ ...state, ...item })}
  months={1}
  minDate={addDays(new Date(), -300)}
  maxDate={addDays(new Date(), 900)}
  direction="vertical"
  scroll={{ enabled: true }}
  ranges={[state.selection, state.compare]}
/>;
```

#### Example: Multiple Range

```jsx inside Markdown
import { addDays } from 'date-fns';
import { useState } from 'react';

const [state, setState] = useState({
  selection1: {
    startDate: addDays(new Date(), 1),
    endDate: null,
    key: 'selection1'
  },
  selection2: {
    startDate: addDays(new Date(), 4),
    endDate: addDays(new Date(), 8),
    key: 'selection2'
  },
  selection3: {
    startDate: addDays(new Date(), 8),
    endDate: addDays(new Date(), 10),
    key: 'selection3',
    autoFocus: false
  }
});

<DateRangePicker
  onChange={item => setState({ ...state, ...item })}
  ranges={[state.selection1, state.selection2, state.selection3]}
/>;
```

#### Example: Insert Aria-label

```jsx inside Markdown
import { addDays } from 'date-fns';
import { useState } from 'react';

const [state, setState] = useState({
  selection1: {
    startDate: addDays(new Date(), -6),
    endDate: new Date(),
    key: 'selection1'
  },
  selection2: {
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 7),
    key: 'selection2'
  }
});

<DateRangePicker
  onChange={item => setState({ ...state, ...item })}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={[state.selection1, state.selection2]}
  direction="horizontal"
  ariaLabels={{
    dateInput: {
      selection1: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
      selection2: { startDate: "start date input of selction 2", endDate: "end date input of selction 2" }
    },
    monthPicker: "month picker",
    yearPicker: "year picker",
    prevButton: "previous month button",
    nextButton: "next month button",
  }}
/>;
```

#### Example: Custom Day Cell Content
Show orange dot only for weekend

```jsx inside Markdown
import { addDays, format, isWeekend } from 'date-fns';
import { useState } from 'react';

const [state, setState] = useState({
  selection1: {
    startDate: addDays(new Date(), -6),
    endDate: new Date(),
    key: 'selection1'
  },
  selection2: {
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 7),
    key: 'selection2'
  }
});

function customDayContent(day) {
  extraDot = null;
  if (isWeekend(day)) {
    extraDot = (
      <div
        style={{
          height: "5px",
          width: "5px",
          borderRadius: "100%",
          background: "orange",
          position: "absolute",
          top: 2,
          right: 2,
        }}
      />
    )
  }
  return (
    <div>
      {extraDot}
      <span>{format(day, "d")}</span>
    </div>
  )
}

<DateRangePicker
  onChange={item => setState({ ...state, ...item })}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={[state.selection1, state.selection2]}
  direction="horizontal"
  dayContentRenderer={customDayContent}
  ariaLabels={{
    dateInput: {
      selection1: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
      selection2: { startDate: "start date input of selction 2", endDate: "end date input of selction 2" }
    },
    monthPicker: "month picker",
    yearPicker: "year picker",
    prevButton: "previous month button",
    nextButton: "next month button",
  }}
/>;
```


#### Example: Restrict Date Selection
Restricts access for range selection to (-30, +30) days of current date.
```jsx inside Markdown
import { addDays } from 'date-fns';
import { useState } from 'react';

const [state, setState] = useState({
  selection: {
    startDate: new Date(),
    endDate: null,
    key: 'selection'
  },
  compare: {
    startDate: new Date(),
    endDate: addDays(new Date(), 3),
    key: 'compare'
  }
});

<DateRangePicker
  onChange={item => setState({ ...state, ...item })}
  months={1}
  minDate={addDays(new Date(), -30)}
  maxDate={addDays(new Date(), 30)}
  direction="vertical"
  scroll={{ enabled: true }}
  ranges={[state.selection, state.compare]}
/>;
```
