import { CalendarModel } from './calendar.model';
import { DayViewModel } from './day-view.model';
import { DayModel } from './day.model';
export declare class CalendarViewModel {
    calendar: CalendarModel;
    private selectedDay;
    private focusableDay;
    private today;
    firstDayOfWeek: number;
    constructor(calendar: CalendarModel, selectedDay: DayModel, focusableDay: DayModel, today: DayModel, firstDayOfWeek: number);
    private currMonthDayViews;
    private _calendarView;
    /**
     * DayViewModel matrix. Size 6x7
     */
    readonly calendarView: DayViewModel[][];
    /**
     * Generates a 6x7 matrix of DayViewModel based on the Calendar.
     * The 6x7 matrix is structured according to the first day of the week.
     * 6 rows to accommodate months which might have dates spanning over 6 weeks.
     * 7 columns because there are 7 days in a week :P :D
     */
    private initializeCalendarView;
    /**
     * Generates a DayViewModel array based on the DayModel passed
     */
    private generateDayViewModels;
    /**
     * Gets the first day of the current month to figure out how many dates of previous month
     * are needed to complete the Calendar View based on the first day of the week.
     * eg: Assuming locale en-US, the first day of the week is Sunday,
     * if first day of the current month lands on Wednesday, then
     * (this.getDay function would return 3 since
     * first day of the week is 0), we need the 3 days from the previous month.
     */
    private numDaysFromPrevMonthInCalView;
    /**
     * Checks if the Day passed is in the CalendarView.
     */
    private isDayInCalendarView;
    /**
     * Using the DayViewModels from the previous, current and next month, this function
     * generates the CalendarView.
     */
    private generateCalendarView;
    /**
     * Initialize the selected day if the day is in the calendar.
     */
    private initializeSelectedDay;
    /**
     * Initializes the focusable day if the day is in the calendar. If focusable day is not set, then
     * we check for the selected day. If selected day is not set then check if today is in the current
     * calendar. If not then just set the 15th of the current calendar month.
     */
    private initializeFocusableDay;
    private setFocusableFlag;
    /**
     * Updates the focusable day in the calendar.
     */
    updateFocusableDay(day: DayModel): void;
}
