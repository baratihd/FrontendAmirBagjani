//components
import { ChartCase, CountCase, IconWrapper } from "../Components";

//utils
import { informationItems } from "../utils";

import "./style.scss";


export const DashboardPageWrapper = () => {
  return (
    <section className="dashboard-section">

      <div className="dashboard-section__info">
        {informationItems.map(item => (
          <IconWrapper
          key={item.id}
            icon={item.icon}
            label={item.label}
            color={item.color}
          />
        ))}
      </div>

      <div className="dashboard-section__cases">
        <CountCase />
        <ChartCase />
      </div>
    </section>
  )
}