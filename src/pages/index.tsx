import { Link } from 'solid-app-router'
import { Component } from 'solid-js'
import { Review } from '../app/components/review'
import { useTitle } from '../core/services/useTitle'

const Page: Component = () => {
  useTitle('Home')

  return (
    <div className="px-12 pb-32 mx-auto space-y-40 max-w-7xl">
      <div className="mx-auto mt-32 space-y-16 text-center">
        <div className="space-y-8">
          <h1 className="text-7xl">หมอหมึก</h1>
          <p className="text-2xl font-light">
            ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
          </p>
        </div>
        <button className="mx-auto py-4 px-16 bg-white text-[#612378]">
          จองคิว
        </button>
      </div>

      <div className="flex-row-reverse gap-6 space-y-12 lg:space-y-0 lg:flex">
        <div className="lg:w-[45%]">
          <div className="w-full h-auto border border-white aspect-square"></div>
        </div>
        <div className="space-y-5 lg:w-[80%]">
          <h1 className="text-5xl">ประหวัดหมอหมึก</h1>
          <p className="text-2xl">
            หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์
            ไพ่ทาโร และการดูลายมือ
            <br /> <br />
            ด้วยความสามารถที่หลากหลาย
            ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละคนเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
          </p>
        </div>
      </div>

      <div className="space-y-16 text-center">
        <h1 className="text-5xl">รีวิวจากลูกค้า</h1>
        <div className="grid justify-center gap-16 lg:flex">
          <Review
            name="แมทธิว นักธุรกิจ"
            subtitle="หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ"
          ></Review>
          <Review
            name="แจ๊ค นักแสดง"
            subtitle="ต้องขอบคุณหมอมหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ"
          ></Review>
          <Review
            name="น้ำใส นักศึกษา"
            subtitle="ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้ายๆ ทันเวลา"
          ></Review>
        </div>
      </div>

      <div className="flex-row-reverse gap-8 space-y-12 lg:space-y-0 lg:flex">
        <div className="space-y-5">
          <h1 className="text-5xl">ทำนายชะตากับหมอหมึก</h1>
          <p className="text-xl">
            สามารถจองคิวได้ในเว็บหรือ
            <br />
            อีเมล: octopus_fortune@teller.com
            <br />
            โทร: 099 XXXX XXX
            <br />
            และมาที่สำนักที่
            <br />
            ชัั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ
            99999
            <br />
            ตามวันเวลาที่นัดไว้
            <br />
            <br />
            จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ 10.00 - 18.30 น. พัก 12.00 -
            1300
            <br />
            เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
          </p>
        </div>
        <div className="lg:w-[50%]">
          <div className="w-full h-auto border border-white aspect-square"></div>
        </div>
      </div>
    </div>
  )
}

export default Page
