
export default function MiniEcommerceLabiales() {
  const phone = "5560996720";

  const products = [
    { name: "MAC Ruby Woo", price: 417, brand: "MAC", desc: "Mate / alta cobertura", swatch: "#A0002A" },
    { name: "MAC Velvet Teddy", price: 417, brand: "MAC", desc: "Mate nude", swatch: "#B97A6B" },
    { name: "MAC Chili", price: 417, brand: "MAC", desc: "Rojo terracota", swatch: "#A63A2B" },
    { name: "MAC Mehr", price: 417, brand: "MAC", desc: "Rosa malva", swatch: "#A05566" },
    { name: "MAC Russian Red", price: 417, brand: "MAC", desc: "Rojo clásico", swatch: "#8E1A1A" },
    { name: "MAC Diva", price: 417, brand: "MAC", desc: "Vino profundo", swatch: "#5B0B1A" },

    { name: "Clinique Black Honey", price: 424, brand: "Clinique", desc: "Bálsamo icónico", swatch: "#5B2330" },
    { name: "Clinique Pink Honey", price: 424, brand: "Clinique", desc: "Bálsamo ligero", swatch: "#C4727D" }
  ];

  const buy = (name, price) => {
    const msg = encodeURIComponent(`Hola, quiero comprar ${name} por $${price}`);
    window.open(`https://wa.me/52${phone}?text=${msg}`, "_blank");
  };

  return (
    <div style={{fontFamily:"Arial",padding:"40px"}}>
      <h1>Catálogo Labiales</h1>
      <p>Compra directa por WhatsApp</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
        {products.map(p => (
          <div key={p.name} style={{border:"1px solid #ddd",padding:"15px",borderRadius:"10px"}}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div style={{height:"20px",background:p.swatch,margin:"10px 0"}}></div>
            <b>${p.price}</b>
            <br/><br/>
            <button onClick={()=>buy(p.name,p.price)}>Comprar por WhatsApp</button>
          </div>
        ))}
      </div>
    </div>
  );
}
