import { useState } from 'react'
import './styles.css'
export default function App() {
  const initialFilterState = {
    brightness: 1,
    contrast: 1,
    saturation: 1,
  };

  const [filter, setFilter] = useState(initialFilterState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: parseFloat(value),
    }));
    document.documentElement.style.setProperty(`--${name}`, value);
  };

  const renderRangeInput = (name, label) => (
    <label key={name}>
      <input 
        type="range" 
        name={name} 
        min={0} max={2} step={0.1} 
        value={filter[name]} 
        onChange={handleInputChange} />
      <span>{label}</span>
    </label>
  );


  /* Challenge

    Range input'ları henüz hiçbir şey yapmıyor. Sizin göreviniz bunları aşağıdaki gibi çalıştırmaktır: 
    
        1. Kullanıcı range input kaydırıcılarından birini her hareket ettirdiğinde, filter state nesnesindeki karşılık gelen değer, değişmeyen diğer iki değer korunarak input değeri olacak şekilde güncellenmelidir. 
           
        2. Filter state nesnesinin her güncellemesinde, --brightness, --contrast ve 
           --saturation görüntünün filter özelliklerini kontrol eden CSS değişkenleri, karşılık gelen filter state nesne özelliklerinin değerleri olacak şekilde güncellenmelidir. İlgili CSS, styles.css dosyasının 1-13 satırlarında bulunabilir. 
		                       
        3. Range input'larının başlangıç değerleri, filter state nesnesindeki karşılık gelen özelliklerinin başlangıç değerleri olmalıdır.   
		   
		4. Kodunuzu mümkün olduğunca DRY yapmaya çalışın
*/

  return (
    <div className='main-container'>
      <h1>
        <span>📷</span> Photo Editörü <span>📷</span>
      </h1>

      <div className='image-container'>
        <img src='./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg' />
      </div>

      <form>
      {[renderRangeInput('brightness', 'Parlaklık'), renderRangeInput('contrast', 'Kontrast'), renderRangeInput('saturation', 'Doygunluk')]}
      </form>
    </div>
  );
};
