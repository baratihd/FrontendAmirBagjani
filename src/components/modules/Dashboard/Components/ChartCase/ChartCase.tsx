//libraries
import {
    Area,
    XAxis,
    YAxis,
    Tooltip,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

//components
import { ArrowDownIcon } from "icons";
import { Button, Chip } from "components/common";

//utils
import { data } from "../../utils";

import "./style.scss";


export const ChartCase = () => {
    return (
        <div className="chart-case">
            <div className="chart-case__header">
                <h3 className="chart-case__header--title">نمودار تعداد کل پرونده ها</h3>
                <div className="chart-case__header--detail">
                    <div className="top">
                        <span>مشاهده بصورت:</span>
                        <Button endIcon={<ArrowDownIcon />}>ماهیانه</Button>
                    </div>
                    <Chip style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>از: 1400/11/19 </span> <span>تا:  1400/12/18</span>
                    </Chip>
                </div>
            </div>

            <div className="chart-case__content">
                <ResponsiveContainer width="100%"  aspect={2 / 1} className="">
                    <AreaChart
                        height={435}
                        data={data}
                        margin={{ top: 0, right: 0, left: -50, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="gray" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="total"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#total)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
