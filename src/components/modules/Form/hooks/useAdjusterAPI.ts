import { request } from "utils";
import { useQuery, QueryKey, UseQueryOptions } from "react-query";
import { Adjuster, AdjusterError, CompatibleAdjuster } from "models";

export const ADJUSTER = "ADJUSTER";

interface Data { }
type Option = Omit<
    UseQueryOptions<Adjuster, AdjusterError, CompatibleAdjuster, QueryKey>,
    "queryKey" | "queryFn"
>;

const getAdjuster = (data: Data) =>
    request<Adjuster, AdjusterError>({ url: "/portal/adjuster/98/file_detail/?state=in_progress", data });

export const useAdjusterAPI = (
    params: Data = {},
    options: Option = {}
) => {
    return useQuery<Adjuster, AdjusterError, CompatibleAdjuster>([ADJUSTER], () => getAdjuster(params), options);
};