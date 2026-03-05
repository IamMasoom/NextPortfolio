import { GitHubCalendar } from "react-github-calendar"
import { ActivityCalendar, Props as CalendarProps, } from 'react-activity-calendar'
import 'react-activity-calendar/tooltips.css';

const GithubCalender = () => {

    const labels = {
        months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        weekdays: [
            'Sun', // Sunday first!
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
        ],
        totalCount: '{{count}} activities in {{year}}',
        legend: {
            less: 'Less',
            more: 'More',
        },
    } satisfies CalendarProps['labels']

    return (
        <div>
            <div className="bg-black p-10 h-full">
                <GitHubCalendar username="IamMasoom"
                labels={labels} showWeekdayLabels
                    tooltips={{
                        activity: {
                            text: activity => `${activity.count} contributions on ${activity.date}`,
                            placement: 'top',
                            offset: 6,
                            hoverRestMs: 150,
                            transitionStyles: {
                                duration: 100,
                                common: { fontFamily: 'monospace' },
                            },
                            withArrow: true,
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default GithubCalender
