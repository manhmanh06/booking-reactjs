import React, { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import styles
import 'react-date-range/dist/theme/default.css'; // Import theme
import { addDays } from 'date-fns';
import format from 'date-fns/format';
import styles from './DateRange.module.css';

function DateRangePickerComp() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),

      key: 'selection',
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const refOne = useRef(null);
  const handleInputClick = () => {
    setShowPopup(true);
  };

  const handleDateRangeChange = (ranges) => {
    setShowPopup(false);
  };
  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === 'Escape') {
      setShowPopup(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setShowPopup(false);
    }
  };
  return (
    <div className={styles['popup']}>
      <input
        value={`${format(dateRange[0].startDate, 'MM/dd/yyyy')} to ${format(
          dateRange[0].endDate,
          'MM/dd/yyyy'
        )}`}
        readOnly
        onClick={handleInputClick}
      />
      <div ref={refOne} className={styles['date-range-popup']}>
        {showPopup && (
          <div>
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              className="date"
              minDate={new Date()}
              onChange={handleDateRangeChange}
              ranges={dateRange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DateRangePickerComp;
