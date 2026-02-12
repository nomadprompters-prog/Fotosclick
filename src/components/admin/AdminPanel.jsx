import React, { useState } from 'react'
const CameraIcon = () => <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="28" stroke="#d97706" strokeWidth="2" fill="none"/><circle cx="30" cy="30" r="8" fill="#d97706"/></svg>
const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>
const LockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 118 0v4"/></svg>
const AdminPanel = ({ onClose }) => {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const [tab, setTab] = useState('upload')
  const login = (e) => { e.preventDefault(); setErr(''); if(user==='sergio'&&pass==='fotosclick2026'){setAuth(true)}else{setErr('Usuario o contraseña incorrectos')} }
  if (!auth) {
    const bg = 'url(https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1920&q=80)'
    return (
      <div style={{position:'fixed',inset:0,zIndex:9999,display:'flex',flexDirection:'column',minHeight:'100vh'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:bg,backgroundSize:'cover',filter:'brightness(0.3)'}}/>
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.5)'}}/>
        <div style={{position:'relative',flex:1,display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem'}}>
          <div style={{background:'linear-gradient(145deg,rgba(30,30,35,0.95),rgba(20,20,25,0.98))',borderRadius:'16px',padding:'2.5rem 2rem',width:'100%',maxWidth:'380px',position:'relative'}}>
            <button onClick={onClose} style={{position:'absolute',top:'-50px',right:0,background:'rgba(255,255,255,0.1)',border:'none',color:'#fff',width:'36px',height:'36px',borderRadius:'50%',cursor:'pointer'}}>✕</button>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'1rem'}}><CameraIcon/></div>
            <h1 style={{textAlign:'center',color:'#fff',fontSize:'1.8rem',marginBottom:'2rem'}}>FotosClick</h1>
            {err && <div style={{background:'rgba(220,38,38,0.2)',borderRadius:'8px',padding:'0.75rem',marginBottom:'1rem',color:'#fca5a5',textAlign:'center'}}>{err}</div>}
            <form onSubmit={login}>
              <div style={{position:'relative',marginBottom:'1rem'}}>
                <div style={{position:'absolute',left:'1rem',top:'50%',transform:'translateY(-50%)'}}><UserIcon/></div>
                <input type="text" placeholder="Usuario" value={user} onChange={e=>setUser(e.target.value)} style={{width:'100%',padding:'1rem 1rem 1rem 3rem',background:'rgba(40,40,45,0.8)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'10px',color:'#fff',boxSizing:'border-box'}}/>
              </div>
              <div style={{position:'relative',marginBottom:'1.5rem'}}>
                <div style={{position:'absolute',left:'1rem',top:'50%',transform:'translateY(-50%)'}}><LockIcon/></div>
                <input type="password" placeholder="Contraseña" value={pass} onChange={e=>setPass(e.target.value)} style={{width:'100%',padding:'1rem 1rem 1rem 3rem',background:'rgba(40,40,45,0.8)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'10px',color:'#fff',boxSizing:'border-box'}}/>
              </div>
              <button type="submit" style={{width:'100%',padding:'1rem',background:'linear-gradient(135deg,#d97706,#b45309)',border:'none',borderRadius:'10px',color:'#fff',fontSize:'1.1rem',fontWeight:'600',cursor:'pointer',marginBottom:'1.5rem'}}>Entrar</button>
              <div style={{textAlign:'center',marginBottom:'1rem'}}>
                <button type="button" onClick={()=>alert('Contacta con el administrador')} style={{background:'none',border:'none',color:'#d97706',textDecoration:'underline',cursor:'pointer'}}>Olvidé mi contraseña</button>
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem'}}>
                <input type="checkbox" id="rem" style={{accentColor:'#d97706'}}/>
                <label htmlFor="rem" style={{color:'#888'}}>Recordarme</label>
              </div>
            </form>
          </div>
        </div>
        <div style={{position:'relative',background:'rgba(30,30,50,0.9)',padding:'1rem',textAlign:'center'}}>
          <span style={{color:'#d97706',fontStyle:'italic'}}>Login Admin</span>
        </div>
      </div>
    )
  }
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.95)',zIndex:9999,overflowY:'auto'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'2rem'}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'2rem'}}>
          <h1 style={{color:'#d97706'}}>Panel Admin</h1>
          <button onClick={()=>setAuth(false)} style={{background:'#dc2626',border:'none',borderRadius:'8px',color:'white',padding:'0.5rem 1rem',cursor:'pointer'}}>Salir</button>
        </div>
        <p style={{color:'#888'}}>Bienvenido Sergio. Panel en construcción.</p>
      </div>
    </div>
  )
}
export default AdminPanel
