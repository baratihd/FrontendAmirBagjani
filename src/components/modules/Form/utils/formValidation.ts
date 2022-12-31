import * as yup from "yup";

export const formValidation = yup.object({
    branch: yup
        .number()
        .required("شعبه را وارد کنید"),
    adjuster: yup
        .number()
        .required("کارشناس را وارد کنید"),
    amount_damages_assessed: yup
        .number()
        .positive("مبلغ خسارت باید بزرگتر از صفر باشد")
        .min(100000000, "مبلغ خسارت باید بیشتر از 10 میلیون تومان باشد")
        .required("خسارت را وارد کنید"),
    visit_date: yup
        .string()
        .required("تاریخ را وارد کنید"),
    visit_time: yup
        .string()
        .required("زمان را وارد کنید"),
    covered_distance: yup
        .number()
        .positive("مسافت طی شده باید بزرگتر از صفر باشد")
        .max(30, "مسافت طی شده باید کمتر از 30 کیلومتر باشد")
        .required("مسافت را وارد کنید"),
    description: yup
        .string()
        .required("توضیحات را وارد کنید"),
});