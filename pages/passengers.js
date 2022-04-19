import React from 'react'
import Footer from "../src/footer.js";
import Header from "../src/header.js";
import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';


function passengers() {
    return (
        <div>

            <Header />

            <Grid
            container
            justifyContent='center'
            alignItems="center"
            >
                <Alert severity="info" sx={{ width: '72%', direction: 'rtl', lineHeight: 2,  }}>
                    طبق اعلام سازمان هواپیمایی کشوری، از پرواز افرادی که تا ۱۴ روز قبل از تاریخ پرواز تست کرونای مثبت داشته‌اند، جلوگیری می‌شود. مسئولیت عدم پذیرش مسافران و همچنین هزینه‌ استرداد در این شرایط به عهده مسافر است. اطلاعات بیشتر درباره محدودیت‌های تردد را در alibaba.ir/mag مشاهده کنید.
                </Alert>
            </Grid>


            <Footer />

        </div>

    )
}

export default passengers