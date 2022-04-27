import React from 'react'
import Footer from "../src/footer.js";
import Header from "../src/header.js";
import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';
import Register from '../src/Components/register.js';

function passengers() {
    return (
        <div>
            <Header />
            <Grid
                container
                justifyContent='center'
                alignItems="center"
            >
                <Alert severity="info" sx={{ width: '71.9%', direction: 'rtl', lineHeight: 2, marginTop: 8 }}>
                    طبق اعلام سازمان هواپیمایی کشوری، از پرواز افرادی که تا ۱۴ روز قبل از تاریخ پرواز تست کرونای مثبت داشته‌اند، جلوگیری می‌شود. مسئولیت عدم پذیرش مسافران و همچنین هزینه‌ استرداد در این شرایط به عهده مسافر است. اطلاعات بیشتر درباره محدودیت‌های تردد را در alibaba.ir/mag مشاهده کنید.
                </Alert>
                <Register />
            </Grid>
            <Footer />
        </div>

    )
}

export default passengers