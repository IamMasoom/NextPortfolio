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
            <div className="p-10 h-full flex items-center justify-center shdw rounded-lg">
                <GitHubCalendar username="IamMasoom"
                    blockSize={18}
                    blockRadius={4}
                    blockMargin={3.5}
                    fontSize={14}
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
