import CardIcon from "../component/CardIcon";
import Commpas from "../icon/Commpas";
import Quran from "../icon/Quran";
import Calender from "../icon/Calendar";
import Search from "../icon/Search";
import Tasbih from "../icon/Tasbih";
import Allah from "../icon/Allah";
import Reminder from "../icon/Reminder";
import Page from "./../component/Page";

const data = {
  title: "Unduh aplikasi,\n Mulai untuk penunjang ibadah!",
  description: "Unduh Muslim App di play store",
  linkPlayStore:
    "https://play.google.com/store/apps/details?id=com.jumbox.app.muslim",
  imgRight: "mock_home.png",
};

const services = [
    {
        title: "Jadwal Sholat",
        description: "Tersedia 600 lebih lokasi jadwal sholat di seluruh Indonesia",
        icon: Reminder,
        background: "linear-gradient(95deg, #5ace19 15%, #afe790)"
    },
    {
        title: "Al-Quran",
        description: "Baca Alquran dengan transliterasi dan terjemahan dalam Bahasa Indonesia",
        icon: Quran,
        background: "linear-gradient(95deg, #32bb9f 15%, #a3e0d3)"
    },
    {
        title: "Kiblat",
        description: "Petunjuk arah kiblat yang berbasis lokasi pengguna",
        icon: Commpas,
        background: "linear-gradient(95deg, #2392da 15%, #a5d2f0)"
    },
    {
        title: "Asmaul Husna",
        description: "99 Asmaul husna beserta artinya dan penjelasannya",
        icon: Allah,
        background: "linear-gradient(95deg, #dd8f1f 15%, #f3cf9b)"
    },
    {
        title: "Kalender Hijriah",
        description: "Menpilkan kalendar Hijriah dan hari besar umat islam",
        icon: Calender,
        background: "linear-gradient(95deg, #fd7364 15%, #febdb6)"
    },
    {
        title: "Cari Hadist",
        description: "Pencarian hadist terdapat 16 kitab dan terjemah",
        icon: Search,
        background: "linear-gradient(95deg, #32c3c1 15%, #9ee3e2)"
    },
    {
        title: "Tasbih Counter",
        description: "Untuk menghitungan jumlah zikir",
        icon: Tasbih,
        background: "linear-gradient(95deg, #dd8f1f 15%, #f3cf9b)"
    }
]

const Home = () => {
  const { title, description, linkPlayStore } = data;

  return (
    <Page title="Home">
      <div className="hero">
        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={linkPlayStore} target="_blnk">
            <img height={50} src="google-play-badge.png" alt="Download Now" />
          </a>
        </div>
        <div className="screenshot">
          <img src="mock_home.png" alt="" />
        </div>
      </div>

      <main className="container mtb">
          <h2 className="center">Features</h2>
          <CardIcon items={services} />
      </main>
    </Page>
  );
};

export default Home;
