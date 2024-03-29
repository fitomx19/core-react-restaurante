import React,{useContext,useState} from 'react'
import AuthContext from "../context/autenticacion/authContext";
import UsuarioContext from '../context/Usuario/usuarioContext';
import { Route, useNavigate } from "react-router-dom";

const PasarelaRegistroUno = () => {
    const authContext = useContext(AuthContext);
    const { usuario,actualizarUsuarioPerfil } = authContext;


    

    const [usuarioUpdate, guardarUsuarioUpdate] = useState({
        phone: "",
        genre: "",
        sex: "",
        obj: "",
        cm: "",
        kg: "",
        _id: usuario._id
      });
      //Extraer de usuario
      const { phone, genre, sex, obj ,cm,kg , _id} = usuarioUpdate;
      let history = useNavigate();

      const onChang1e = (e) => {
        guardarUsuarioUpdate({
          ...usuarioUpdate,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
    
        //pasar al action
        try{
        actualizarUsuarioPerfil({ phone, genre, sex, obj , kg,cm ,_id })
        history('/dashboard');
        
        }catch(error){
            console.log(error.message)
        }
        
      };
    


    return ( <>  
            <section>
<div className="bg-grey-lighter  flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">¡Continua tu registro!</h1>
                    
                    <form method="post" className="" onSubmit={onSubmit}>
                   
                    <label >Numero de Telefóno</label>
<div className="relative mt-1">
  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
  <img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"/>
  </div>
  <input type="number"  onChange={onChang1e} name='phone' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-green block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(55)48701798"/>
</div>   
                    <label>Usuario</label>
                    {usuario ?<input type="text" value={usuario._id} name='_id'></input>  : <h2>no hay</h2>}
                    
                    <label>Selecciona tu sexo </label>
                        <select
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="sex"
                        onChange={onChang1e}
                        >
                        <option value="">-Seleccionar-</option>
                        <option value="1">Mujer</option>
                        <option value="2">Hombre</option>
                        </select>
                    <label>Selecciona el género que más te identifique</label>
                        <select
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="genre"
                        onChange={onChang1e}
                        >
                        <option value="">-Seleccionar-</option>
                        <option value="1">Femenino</option>
                        <option value="2">Masculino</option>
                        <option value="3">No binario</option>
                        <option value="4">Otros</option>
                        </select>

                    <label>¿Cuál es tu objetivo nutricional?</label>
                        <select
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="obj"
                        onChange={onChang1e}
                        >
                        <option value="">-Seleccionar-</option>
                        <option value="1">Bajar de peso</option>
                        <option value="2">Subir de peso</option>
                        <option value="3">Mantener mi peso ideal</option>
                    
                        </select>
                    <label>¿Cuál es tu estatura?</label>
                        <select
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="cm"
                        onChange={onChang1e}
                        >
                        <option value="">-Seleccionar-</option>
                        <option value="90">90 cm</option>
                        <option value="91">91 cm</option>
                        <option value="93">92 cm</option>
                        <option value="94">94 cm</option>
                        <option value="95">95 cm</option>
                        <option value="96">96 cm</option>
                        <option value="97">97 cm</option>
                        <option value="98">98 cm</option>
                        <option value="99">99 cm</option>
                        <option value="100">100 cm</option>
                        <option value="101">101 cm</option>
                        <option value="102">102 cm</option>
                        <option value="103">103 cm</option>
                        <option value="104">104 cm</option>
                        <option value="105">105 cm</option>
                        <option value="106">106 cm</option>
                        <option value="107">107 cm</option>
                        <option value="108">108 cm</option>
                        <option value="109">109 cm</option>
                        <option value="110">110 cm</option>
                        <option value="111">111 cm</option>
                        <option value="112">112 cm</option>
                        <option value="113">113 cm</option>
                        <option value="114">114 cm</option>
                        <option value="115">115 cm</option>
                        <option value="116">116 cm</option>
                        <option value="117">117 cm</option>
                        <option value="118">118 cm</option>
                        <option value="119">119 cm</option>
                        <option value="120">120 cm</option>
                        <option value="121">121 cm</option>
                        <option value="122">122 cm</option>
                        <option value="123">123 cm</option>
                        <option value="124">124 cm</option>
                        <option value="125">125 cm</option>
                        <option value="126">126 cm</option>
                        <option value="127">127 cm</option>
                        <option value="128">128 cm</option>
                        <option value="129">129 cm</option>
                        <option value="130">130 cm</option>
                        <option value="131">131 cm</option>
                        <option value="132">132 cm</option>
                        <option value="133">133 cm</option>
                        <option value="134">134 cm</option>
                        <option value="135">135 cm</option>
                        <option value="136">136 cm</option>
                        <option value="137">137 cm</option>
                        <option value="138">138 cm</option>
                        <option value="139">139 cm</option>
                        <option value="140">140 cm</option>
                        <option value="141">141 cm</option>
                        <option value="142">142 cm</option>
                        <option value="143">143 cm</option>
                        <option value="144">144 cm</option>
                        <option value="145">145 cm</option>
                        <option value="146">146 cm</option>
                        <option value="147">147 cm</option>
                        <option value="148">148 cm</option>
                        <option value="149">149 cm</option>
                        <option value="150">150 cm</option>
                        <option value="151">151 cm</option>
                        <option value="152">152 cm</option>
                        <option value="153">153 cm</option>
                        <option value="154">154 cm</option>
                        <option value="155">155 cm</option>
                        <option value="156">156 cm</option>
                        <option value="157">157 cm</option>
                        <option value="158">158 cm</option>
                        <option value="159">159 cm</option>
                        <option value="160">160 cm</option>
                        <option value="161">161 cm</option>
                        <option value="162">162 cm</option>
                        <option value="163">163 cm</option>
                        <option value="164">164 cm</option>
                        <option value="165">165 cm</option>
                        <option value="166">166 cm</option>
                        <option value="167">167 cm</option>
                        <option value="168">168 cm</option>
                        <option value="169">169 cm</option>
                        <option value="170">170 cm</option>
                        <option value="171">171 cm</option>
                        <option value="172">172 cm</option>
                        <option value="173">173 cm</option>
                        <option value="174">174 cm</option>
                        <option value="175">175 cm</option>
                        <option value="176">176 cm</option>
                        <option value="177">177 cm</option>
                        <option value="178">178 cm</option>
                        <option value="179">179 cm</option>
                        <option value="180">180 cm</option>
                        <option value="181">181 cm</option>
                        <option value="182">182 cm</option>
                        <option value="183">183 cm</option>
                        <option value="184">184 cm</option>
                        <option value="185">185 cm</option>
                        <option value="186">186 cm</option>
                        <option value="187">187 cm</option>
                        <option value="188">188 cm</option>
                        <option value="189">189 cm</option>
                        <option value="190">190 cm</option>
                        <option value="191">191 cm</option>
                        <option value="192">192 cm</option>
                        <option value="193">193 cm</option>
                        <option value="194">194 cm</option>
                        <option value="195">195 cm</option>
                        <option value="196">196 cm</option>
                        <option value="197">197 cm</option>
                        <option value="198">198 cm</option>
                        <option value="199">199 cm</option>
                        <option value="200">200 cm</option>
                        <option value="201">201 cm</option>
                        <option value="202">202 cm</option>
                        <option value="203">203 cm</option>
                        <option value="204">204 cm</option>
                        <option value="205">205 cm</option>
                        <option value="206">206 cm</option>
                        <option value="207">207 cm</option>
                        <option value="208">208 cm</option>
                        <option value="209">209 cm</option>
                        
                    
                        </select>
                    <label>¿Cuál es tu peso?</label>
                        <select
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="kg"
                        onChange={onChang1e}
                        >
                        <option value="">-Seleccionar-</option>
                        <option value="30">30 kg</option>
                        <option value="31">31 kg</option>
                        <option value="32">32 kg</option>
                        <option value="33">33 kg</option>
                        <option value="34">34 kg</option>
                        <option value="35">35 kg</option>
                        <option value="36">36 kg</option>
                        <option value="37">37 kg</option>
                        <option value="38">38 kg</option>
                        <option value="39">39 kg</option>
                        <option value="40">40 kg</option>
                        <option value="41">41 kg</option>
                        <option value="42">42 kg</option>
                        <option value="45">43 kg</option>
                        <option value="44">44 kg</option>
                        <option value="45">45 kg</option>
                        <option value="46">46 kg</option>
                        <option value="47">47 kg</option>
                        <option value="48">48 kg</option>
                        <option value="49">49 kg</option>
                        <option value="50">50 kg</option>
                        <option value="51">51 kg</option>
                        <option value="52">52 kg</option>
                        <option value="53">53 kg</option>

                        <option value="54">54 kg</option>
                        <option value="55">55 kg</option>
                        <option value="56">56 kg</option>
                        <option value="57">57 kg</option>
                        <option value="58">58 kg</option>
                        <option value="59">59 kg</option>
                        <option value="60">60 kg</option>
                        <option value="61">61 kg</option>
                        <option value="62">62 kg</option>
                        <option value="63">63 kg</option>
                        <option value="64">64 kg</option>
                        <option value="65">65 kg</option>
                        <option value="66">66 kg</option>
                        <option value="67">67 kg</option>
                        <option value="68">68 kg</option>
                        <option value="69">69 kg</option>
                        <option value="70">70 kg</option>
                        <option value="71">71 kg</option>
                        <option value="72">72 kg</option>
                        <option value="73">73 kg</option>
                        <option value="74">74 kg</option>
                        <option value="75">75 kg</option>
                        <option value="76">76 kg</option>
                        <option value="77">77 kg</option>

                        <option value="78">78 kg</option>
                        <option value="79">79 kg</option>
                        <option value="80">80 kg</option>
                        <option value="81">81 kg</option>
                        <option value="82">82 kg</option>
                        <option value="83">83 kg</option>
                        <option value="84">84 kg</option>
                        <option value="85">85 kg</option>
                        <option value="86">86 kg</option>
                        <option value="87">87 kg</option>
                        <option value="88">88 kg</option>
                        <option value="89">89 kg</option>
                        <option value="90">90 kg</option>
                        <option value="91">91 kg</option>
                        <option value="92">92 kg</option>
                        <option value="93">93 kg</option>
                        <option value="94">94 kg</option>
                        <option value="95">95 kg</option>
                        <option value="96">96 kg</option>
                        <option value="97">97 kg</option>
                        <option value="98">98 kg</option>
                        <option value="99">99 kg</option>
                        <option value="100">100 kg</option>
                        <option value="101">101 kg</option>
                        <option value="102">102 kg</option>
                        <option value="103">103 kg</option>
                        <option value="104">104 kg</option>
                        <option value="105">105 kg</option>
                        <option value="106">106 kg</option>
                        <option value="107">107 kg</option>
                        <option value="108">108 kg</option>
                        <option value="109">109 kg</option>
                        <option value="110">110 kg</option>
                        <option value="111">111 kg</option>
                        <option value="112">112 kg</option>
                        <option value="113">113 kg</option>
                    
                        </select>

                        <input
                            type="submit"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            value="Finalizar">

                            </input>
                    
                    </form>
                    
                </div>

               
            </div>
        </div>
</section>
           
         
       
           
    </> );
}
 
export default PasarelaRegistroUno;









