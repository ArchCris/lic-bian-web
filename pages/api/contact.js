import { mailOptions, transporter } from "@/lib/nodemailer"

const handler = async (req, res) => {
  if(req.method === "POST"){
    const data = req.body
  try{
    await transporter.sendMail({
      ...mailOptions,
      subject: `Consulta de ${data.name},${data.email}`,
      text: "test",
      html:`<p>${data.message}</p>`
    })
    return res.status(200).json({ message: "succes" })
  }catch(err){
    console.log('aca',err)
    return res.status(400).json({ message: err.message })
  }
}
  return res.status(400).json({ message: 'Bad request' })
}

export default handler;
