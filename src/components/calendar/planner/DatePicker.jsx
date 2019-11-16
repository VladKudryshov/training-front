import moment from "moment";
import React, {Component} from "react";
import "../index.css";


const Heading = ({date, changeMonth, resetDate}) => (
    <div className="calendar-header">
        <div className="calendar-today">
            <div className="day-name">{date.format('ddd')}</div>
            <div className="day-value">{date.format('DD')}</div>
        </div>

        <div className="calendar-current-mouth">
            <i className="fas fa-chevron-left" onClick={() => changeMonth(date.month() - 1)}/>
            <span><b>{date.format('MMMM')}</b></span>
            <span className="year">{date.format('YYYY')}</span>
            <i className="fas fa-chevron-right" onClick={() => changeMonth(date.month() + 1)}/>

        </div>
    </div>
);

const TypeSelection = ({selectedType, selectType}) => (
    <ul className="calendar-choose-type">
        <li className={selectedType === 'Today' ? "calendar-type-active" : ''} onClick={() => selectType("Today")}>Today</li>
        <li className={selectedType === 'This week' ? "calendar-type-active" : ''} onClick={() => selectType("This week")}>This week</li>
        <li className={selectedType === 'Next week' ? "calendar-type-active" : ''} onClick={() => selectType("Next week")}>Next week</li>
    </ul>
);

const Day = ({currentDate, date, startDate, endDate, onClick}) => {
    let className = [];

    if (moment().isSame(date, 'day')) {
        className.push('active');
    }

    if (date.isSame(startDate, 'day')) {
        className.push('start');
    }

    if (date.isBetween(startDate, endDate, 'day')) {
        className.push('between');
    }

    if (date.isSame(endDate, 'day')) {
        className.push('end');
    }

    if (!date.isSame(currentDate, 'month')) {
        className.push('muted');
    }

    return (
        <span className={className.join(' ')} onClick={() => onClick(date)}>{date.date()}</span>
    )
};

const Days = ({date, startDate, endDate, onClick}) => {
    const thisDate = moment(date);
    const daysInMonth = moment(date).daysInMonth();
    const firstDayDate = moment(date).startOf('month');
    const previousMonth = moment(date).subtract(1, 'month');
    const previousMonthDays = previousMonth.daysInMonth();
    const nextsMonth = moment(date).add(1, 'month');
    let days = [];
    let labels = [];

    for (let i = 1; i <= 7; i++) {
        labels.push(<span className="label">{moment().day(i).format('ddd')}</span>);
    }

    for (let i = firstDayDate.day() === 0 ? 7 : firstDayDate.day(); i > 1; i--) {
        previousMonth.date(previousMonthDays - i + 2);

        days.push(
            <Day
                key={previousMonth.format('DD MM YYYY')}
                onClick={date => onClick(date)}
                currentDate={date}
                date={moment(previousMonth)}
                startDate={startDate}
                endDate={endDate}
            />);

    }

    for (let i = 1; i <= daysInMonth; i++) {
        thisDate.date(i);

        days.push(
            <Day
                key={thisDate.format('DD MM YYYY')}
                onClick={date => onClick(date)}
                currentDate={date}
                date={moment(thisDate)}
                startDate={startDate}
                endDate={endDate}
            />
        );

    }

    const daysCount = days.length;
    for (let i = 1; i <= 42 - daysCount; i++) {
        nextsMonth.date(i);
        days.push(
            <Day
                key={nextsMonth.format('DD MM YYYY')}
                onClick={date => onClick(date)}
                currentDate={date}
                date={moment(nextsMonth)}
                startDate={startDate}
                endDate={endDate}
            />);

    }

    console.log(days)

    return (
        <nav className="calendar--days">
            {labels}
            {days}
        </nav>
    );


};

class DatePicker extends Component {
    state = {
        selectedType: 'Today',
        date: moment(),
        startDate: moment(),
        endDate: moment()
    };

    selectType = (type) => {
        if (type === 'Today') {
            this.today(type)
        }
        if (type === 'This week') {
            this.thisWeek(type)
        }
        if (type === 'Next week') {
            this.nextWeek(type)
        }

    };

    today = (type) => {
        this.setState({
            selectedType: type,
            date: moment(),
            startDate: moment(),
            endDate: moment()
        });
    };

    thisWeek(type) {
        this.setState({
            selectedType: type,
            date: moment(),
            startDate: moment(),
            endDate: moment().add(7 - moment().day(), 'day')
        });

    }

    nextWeek(type) {
        this.setState({
            selectedType: type,
            date: moment(),
            startDate: moment().add(8 - moment().day(), 'day'),
            endDate: moment().add(8 - moment().day() + 6, 'day')
        });
    }

    resetDate() {
        this.setState({
            date: moment()
        });

    }

    changeMonth(month) {
        const {date} = this.state;

        date.month(month);

        this.setState(
            date);

    }

    changeDate(date) {
        let {startDate, endDate} = this.state;

        if (startDate === null || date.isBefore(startDate, 'day') || !startDate.isSame(endDate, 'day')) {
            startDate = moment(date);
            endDate = moment(date);
        } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
            startDate = null;
            endDate = null;
        } else if (date.isAfter(startDate, 'day')) {
            endDate = moment(date);
        }

        this.setState({
            startDate,
            endDate
        });

    }

    render() {
        const {selectedType, date, startDate, endDate} = this.state;

        console.log(this.state)

        return (
            <div id="calendar" className="gap">
                <Heading date={date}
                         changeMonth={month => this.changeMonth(month)}
                         resetDate={() => this.resetDate()}
                />

                <TypeSelection selectedType={selectedType} selectType={this.selectType}/>

                <Days
                    onClick={date => this.changeDate(date)}
                    date={date}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
        )
    }
}


{/*<div className="calendar-header">
    <div className="calendar-today">
        <div className="day-name">MON</div>
        <div className="day-value">5</div>
    </div>

    <div className="calendar-current-mouth">
        October 2019
    </div>
    <div>
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
    </div>
</div>
<ul className="calendar-choose-type">
    <li>Today</li>
<li className="calendar-type-active">This week</li>
<li>Next week</li>
</ul>
<div className="calendar-mouth"></div>*/
}

export default DatePicker