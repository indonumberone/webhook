import { app } from "../index.js";
import { returnMessage } from "./returnMessage.js";
export const webhook = async (sock) => {
  app.post("/tes2", async (req, res) => {
    console.log(req.body);
    const { sensor, system_status, risk, tempat } = req.body;
    const balas = await returnMessage(
      sensor,
      system_status,
      risk,
      tempat,
      "PASCAS"
    );
    console.log(balas);
    await sock.sendMessage("6289649178812@s.whatsapp.net", {
      text: balas,
    });

    res.status(200).send("berhasil terkirim");
  });
};
