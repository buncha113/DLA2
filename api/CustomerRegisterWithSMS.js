import http from 'k6/http';
import { SharedArray } from 'k6/data';


const data = new SharedArray('RefNo1', function () {
    return JSON.parse(open('../file/file2.json')).CustomerID;
});




export  function CustomerRegisterWithSMS(scenario) {
  const RefNo1 = data[scenario.iterationInTest];
  const url = 'https://dla-local2568.thaijobjob.com/api/customer/register_sms';
  const payload = JSON.stringify({
    form: {
      sector: "ภาคใต้ เขต 2",
      sector_id: "10",
      type: "วิชาการ",
      type_id: "2",
      position: "นักวิชาการพัสดุ",
      HdPosition: "209",
      name1: "นาง",
      name2: "กุ้ง",
      name3: "มณีกระโทก",
      sex: "ชาย",
      national: "ไทย",
      race: "ไทย",
      religion: "คริสต์",
      birth_date: "05-03-1985",
      CustomerID: ""+RefNo1,
      cus_district: "เชียงราย",
      cus_province: "ศรีสะเกษ",
      address: "571 บวรนิเวศน์",
      village: "9",
      moo: "11",
      alleys: "ท่าข้าม",
      road: "มไหสวรรย์",
      sub_district: "Surrey",
      district: "นครศรีธรรมราช",
      province: "อุดรธานี",
      zipcode: "89888",
      telephone: "023175763",
      telmobile: "023175763",
      email: "4082251320479.14@gmail.com",
      regis_address: "3277 ลิขิต",
      regis_village: "92",
      regis_moo: "2",
      regis_alleys: "3921 อรุณอมรินทร์",
      regis_road: "สังฆประชา",
      regis_sub_district: "Henry County",
      regis_district: "อุดรธานี",
      regis_province: "พิษณุโลก",
      regis_zipcode: "24245",
      degree_position: "ปริญญาตรี",
      degree_name: "รัฐศาสตร์",
      degree: "",
      university: "มหาวิทยาลัยธรรมศาสตร์",
      graduate_date: "02-03-2010",
      gpa: "3.97",
      ocsc_cert: "เป็นผู้สอบผ่านการวัดความรู้ความสามารถทั่วไปของสำนักงาน กพ. ระดับปวส.",
      occupation: "ธุรกิจส่วนตัว",
      occupation_other: "",
      occupation_workplace: "แซ่หลี่, ณ ป้อมเพชร and หนอกค้างพลู",
      occupation_divisions: "Books",
      occupation_phone: "023175763",
      occupation_position: "Global Configuration Producer",
      occupation_position_level: "6",
      occupation_salary: "64538",
      occupation_start_date: "21-08-2024",
      occupation_end_date: "13-10-2025",
      occupation_end_reason: "",
      emer_prefix: "นาย",
      emer_firstname: "ปทุมพร",
      emer_lastname: "มณีนอก",
      emer_relation: "น้อง",
      emer_telmobile: "023175763",
      consent: "1",
      ip1: "d72f:f5a8:bc6b:cdb9:fd9b:d9af:80b9:5f38",
      ip2: "8bdf:c006:dce9:cadc:dcce:5b75:5198:7f9b",
      file: [
        {
          type: "image",
          name: "2025/image/4082251320479_fileImg.jpeg",
          status: "1",
        },
      ],
    },
    sms: {
      PayStatus: "*",
      RefNo1: "",
      status: "1",
      mobile: "023175763",
      email: "4082251320479.14@gmail.com",
    },
  });

  const params = {
    headers: { 'Content-Type': 'application/json' },
    timeout: 600000  // 10,000 มิลลิวินาที (10 วินาที)
};

  const response = http.post(url, payload, params);
  //console.log(RefNo1);
  return response
}


