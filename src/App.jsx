import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [mood, setMood] = useState("");
  const [need, setNeed] = useState("");
  const [dua, setDua] = useState(null);

  const generateDua = () => {
    const duas = {
      happy: {
        success: {
          text: "اللهم بارك لي في فرحتي واجعلها دائمة بطاعتك.",
          nasiha: [
            "احمد الله على النعم، فالشكر يزيدها.",
            "شارك فرحتك بالخير لتزداد بركة."
          ],
        },
        peace: {
          text: "اللهم اجعل سعادتي سبباً للطمأنينة في قلبي.",
          nasiha: [
            "اذكر الله في سرّك، فهو مصدر الراحة.",
            "ابتسم، فتبسّمك صدقة."
          ],
        },
        love: {
          text: "اللهم اجعل المحبة بيننا خالصة لوجهك الكريم.",
          nasiha: [
            "من أحب لله دام حبه.",
            "كن طيب القلب، فالله يحب الطيبين."
          ],
        },
      },
      sad: {
        strength: {
          text: "اللهم قوِّ قلبي واملأه صبراً وأملاً برحمتك.",
          nasiha: [
            "تذكّر أن كل حزن يمرّ، فاصبر واحتسب.",
            "قُم وتوضأ وصلِّ ركعتين، فالنور يأتي مع السجود."
          ],
        },
        hope: {
          text: "اللهم اجعل لي بعد الحزن فرحاً وبعد العسر يسراً.",
          nasiha: [
            "لا تيأس، فربّك أرحم بك من نفسك.",
            "كل تأخير يحمل خيراً من الله."
          ],
        },
        forgiveness: {
          text: "اللهم اغسل حزني بعفوك واغفر لي زلاتي.",
          nasiha: [
            "الاستغفار يبدّد الهموم.",
            "كل دمعة صادقة تمحو ذنباً."
          ],
        },
      },
      stressed: {
        calm: {
          text: "اللهم أنزل على قلبي سكينة وطمأنينة.",
          nasiha: [
            "تنفّس بعمق واذكر اسم الله، سترى السكون.",
            "خفّف عن نفسك ولا تحمل همّ الغد."
          ],
        },
        guidance: {
          text: "اللهم دلّني على ما فيه خير لي وبارك لي فيه.",
          nasiha: [
            "استخر ربك في كل قرار.",
            "الثقة بالله راحة للقلب."
          ],
        },
        patience: {
          text: "اللهم ارزقني صبراً جميلاً ورضاً عميقاً.",
          nasiha: [
            "الصبر مفتاح الفرج.",
            "من رضي بقضاء الله، رضي الله عنه."
          ],
        },
      },
      grateful: {
        blessings: {
          text: "اللهم اجعلني من الشاكرين لنعمك الذاكرين لك دائماً.",
          nasiha: [
            "دوام النعمة في شكرها.",
            "انظر لمن دونك، تعرف عظمة ما عندك."
          ],
        },
        sharing: {
          text: "اللهم اجعلني سبباً في إسعاد الآخرين.",
          nasiha: [
            "من زرع خيراً، حصد حباً.",
            "السعادة تكبر حين تُشارك."
          ],
        },
      },
    };

    const result = duas[mood]?.[need];
    if (result) {
      setDua(result);
    } else {
      setDua({
        text: "اللهم ارزقني خير ما أتمنى وأبعد عني ما يؤذيني.",
        nasiha: ["دوماً تفاءل بالخير.", "ثق أن ما كتبه الله لك هو الأفضل."]
      });
    }
  };

  return (
    <div className="app-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="title"
      >
        🌌 روحانية – مولّد الدعاء الساحر 🌌
      </motion.h1>

      <motion.div 
        className="form-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <label>اسمك:</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="اكتب اسمك..."
        />

        <label>مزاجك الحالي:</label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">اختر...</option>
          <option value="happy">سعيد 😊</option>
          <option value="sad">حزين 😢</option>
          <option value="stressed">مرهق 😔</option>
          <option value="grateful">ممتن 🙏</option>
        </select>

        <label>احتياجك المحدد:</label>
        <select value={need} onChange={(e) => setNeed(e.target.value)}>
          <option value="">اختر...</option>
          <option value="success">النجاح 🌟</option>
          <option value="peace">الراحة 🕊️</option>
          <option value="strength">القوة 💪</option>
          <option value="hope">الأمل 🌈</option>
          <option value="calm">السكينة 💤</option>
          <option value="guidance">الهداية 🌿</option>
          <option value="love">المحبة 💖</option>
          <option value="forgiveness">المغفرة 🕋</option>
          <option value="blessings">البركة 🍃</option>
          <option value="sharing">العطاء 🤝</option>
          <option value="patience">الصبر 🕰️</option>
        </select>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateDua}
        >
          🌙 أنشئ الدعاء 🌙
        </motion.button>
      </motion.div>

      {dua && (
        <motion.div 
          className="dua-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h2 
            className="username"
            animate={{ 
              textShadow: ["0 0 10px #fff", "0 0 20px #b39ddb", "0 0 10px #fff"],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          >
            🌠 دعاؤك الخاص يا {name || "صديقي"} 🌠
          </motion.h2>
          <p className="dua-text">{dua.text}</p>
          <h3 className="nasiha-title">🌿 هذه نصيحة لك:</h3>
          <ul className="nasiha-list">
            {dua.nasiha.map((n, i) => (
              <li key={i}>💡 {n}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default App;
