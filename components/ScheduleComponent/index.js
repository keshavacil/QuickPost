import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { StaticTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";  
import { format } from "date-fns";
import dayjs from "dayjs";  
import "react-datepicker/dist/react-datepicker.css"; 
import styles from "./style.module.css";

const SchedulePost = ({ scheduleData, onScheduleChange, onCloseModal }) => {
  const [selectedDate, setSelectedDate] = useState(scheduleData.date ? new Date(scheduleData.date) : null);
  const [selectedTime, setSelectedTime] = useState(
    dayjs(scheduleData.time ? `${scheduleData.date}T${scheduleData.time.hour}:${scheduleData.time.minute}` : '')
  );
  const [postOption, setPostOption] = useState('now'); 

  const today = new Date().toISOString().split("T")[0];
  const currentTime = dayjs();

  const handleInputChange = (field, value) => {
    onScheduleChange(field, value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = format(date, "yyyy-MM-dd");
    handleInputChange("date", formattedDate);
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
    const formattedTime = {
      hour: newTime.hour(),
      minute: newTime.minute(),
    };
    handleInputChange("time", formattedTime);
  };

  const isToday = selectedDate && selectedDate.toISOString().split("T")[0] === today;

  const getValidTimePickerValue = () => {
    return isToday ? currentTime : dayjs("2022-04-17T15:30");
  };

  const handleSelectChange = (event) => {
    setPostOption(event.target.value);
  };

  const handleSubmit = () => {

    if (postOption === 'schedule') {
     
      console.log("Scheduled for:", selectedDate, selectedTime.format("HH:mm"));
    } else {
      
      console.log("Post Now");
    }
    onCloseModal(); 
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>  
      <div className={styles.SchedulePost}>
        <h3>Schedule Your Post</h3>

        <div className={styles.SelectOption}>
          <label>Choose Post Option</label>
          <select value={postOption} onChange={handleSelectChange}>
            <option value="now">Post Now</option>
            <option value="schedule">Schedule Post</option>
          </select>
        </div>

        {postOption === 'schedule' && (
          <>
            <div className={styles.SchedulePostDate}>
              <label>Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                customInput={<input />}
              />
            </div>

            <div className={styles.SchedulePostTime}>
              <label>Time</label>
              <StaticTimePicker
                value={selectedTime}
                onChange={handleTimeChange}
                minTime={isToday ? currentTime : undefined}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          </>
        )}

        <div className={styles.SchedulePostButton}>
          <button onClick={handleSubmit}>
            {postOption === 'schedule' ? "Schedule Post" : "Post Now"}
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SchedulePost;
