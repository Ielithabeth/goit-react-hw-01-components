import { Section } from "./Statistic.styled"
import PropTypes from "prop-types"

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && (<h2>{title}</h2>)}
            
            <ul>
            {stats.map(({ id, label, percentage }) => {
                return (
                    <li key={id}>
                        <span>{label}</span>
                        <p> {percentage}%</p>
                    </li>
                )
            })}
            </ul>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}