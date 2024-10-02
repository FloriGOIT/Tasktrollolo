import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import React from "react";
import { Calendar } from "primereact/calendar";

export default function CalendarPicker({ value, onChange }) {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() + 5, 11, 31);

    return (
        <div className="card flex justify-content-center">
            <Calendar
                value={value}
                onChange={onChange}
                dateFormat="dd/mm/yy"
                minDate={today}
                maxDate={maxDate}
                showIcon
                showButtonBar
                yearNavigator
                yearRange="1900:2100"
                appendTo={document.body}
            />
        </div>
    );
}
