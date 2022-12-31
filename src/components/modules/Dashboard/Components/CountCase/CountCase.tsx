//components
import { ArrowDownIcon } from "icons";
import { Button, Chip } from "components/common";

//utils
import { informationItems } from "../../utils";

import "./style.scss"

export const CountCase = () => {
    return (
        <div className="count-cases">

            <div className="count-cases__header">
                <h3 className="count-cases__header--title">تعداد پروند ها</h3>
                <div className="count-cases__header--detail">
                    <div className="top">
                        <span>مشاهده بصورت:</span>
                        <Button endIcon={<ArrowDownIcon />}>ماهیانه</Button>
                    </div>
                    <Chip style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>از: 1400/11/19 </span> <span>تا:  1400/12/18</span>
                    </Chip>
                </div>
            </div>

            <ul className="count-cases__content">
                {informationItems.map(item => (
                    <li key={item.id} className="count-cases__content--list-item">
                        {item.icon}
                        <span>{item.count}</span>
                        <p>پرونده {item.label}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
