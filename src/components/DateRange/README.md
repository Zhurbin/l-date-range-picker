This component extends all the props of **[Calendar](#calendar)** component. In addition to those props, it has the following props: 

| Prop Name  |  Type |
|---|---|
|  **moveRangeOnFirstSelection** |  boolean |
|  **retainEndDateOnFirstSelection** |  boolean |
|  **onRangeFocusChange** |  function |
|  **rangeColors**  |  array |
|  **ranges**  |  array |


#### Example: Editable Date Inputs
```jsx inside Markdown
import {useState} from 'react'
const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
<DateRange
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
```

#### Example: Without presets view

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


<DateRange
  ranges={state}
  months={1}
  direction='vertical'
  scroll={{
    enabled: true,
    calendarHeight: 255,
  }}
  moveRangeOnFirstSelection={false}
  navigatorRenderer={(() => {})}
  editableDateInputs
  onChange={item => setState([item.selection])}
  inputRanges={[]}
/>;
```
