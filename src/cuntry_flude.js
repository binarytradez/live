    import React, { useState } from 'react'
    import uk from './assets/png_48/united-kingdom.png';
    import usa from './assets/png_48/united-states-of-america.png';     
    import algeria from './assets/png_48/algeria.png';
    import andorra from './assets/png_48/andorra.png';
    import angola from './assets/png_48/angola.png';
    import anguilla from './assets/png_48/anguilla.png';
    import antigua from './assets/png_48/antigua-and-barbuda.png';
    import argentina from './assets/png_48/argentina.png';
    import armenia from './assets/png_48/armenia.png';
    import aruba from './assets/png_48/aruba.png';
    import austallia from './assets/png_48/austallia.png';
    import austria from './assets/png_48/austria.png';
    import azerbaijan from './assets/png_48/azerbaijan.png';
    import bahamas from './assets/png_48/bahamas.png';
    import bahrain from './assets/png_48/bahrain.png';
    import bangladesh from './assets/png_48/bangladesh.png';
    import barbados from './assets/png_48/barbados.png';
    import belarus from './assets/png_48/belarus.png';
    import belgium from './assets/png_48/belgium.png';
    import belize from './assets/png_48/belize.png';
    import benin from './assets/png_48/benin.png';
    import bermuda from './assets/png_48/bermuda.png';
    import bhutan from './assets/png_48/bhutan.png';
    import bolivia from './assets/png_48/bolivia-state-of-plurinational.png';
    import bosnia from './assets/png_48/bosnia-and-herzegovina.png';
    import bostwana from './assets/png_48/bostwana.png';
    import brazil from './assets/png_48/brazil.png';
    import brunei from './assets/png_48/brunei-darussalam.png';
    import bulgaria from './assets/png_48/bulgaria.png';
    import burkina from './assets/png_48/burkina-faso.png';
    import burundi from './assets/png_48/burundi.png';
    import Cambodia from './assets/png_48/Cambodia.png';
    import cameroon from './assets/png_48/cameroon.png';
    import canada from './assets/png_48/canada.png';
    import cabo from './assets/png_48/cabo-verde.png';
    import cayman from './assets/png_48/cayman-islands.png';
    import c_a_R from './assets/png_48/central-african-republic.png';
    import chile from './assets/png_48/chile.png';
    import china from './assets/png_48/china.png';
    import colombia from './assets/png_48/colombia.png';
    import comoros from './assets/png_48/comoros.png';
    import democratic from './assets/png_48/democratic-republic-of-the-congo.png';
    import cook from './assets/png_48/cook-islands.png';
    import costa from './assets/png_48/costa-rica.png';
    import croatia from './assets/png_48/croatia.png';
    import cuba from './assets/png_48/cuba.png';
    import cyprus from './assets/png_48/cyprus.png';
    import czech from './assets/png_48/czech-republic.png';
    import denmark from './assets/png_48/denmark.png';
    import djibouti from './assets/png_48/djibouti.png';
    import dominica from './assets/png_48/dominica.png';
    import dominican from './assets/png_48/dominican-republic.png';
    import ecuador from './assets/png_48/ecuador.png';
    import egypt from './assets/png_48/egypt.png';
    import el from './assets/png_48/el-salvador.png';
    import guinea from './assets/png_48/equatorial-guinea.png';
    import eritrea from './assets/png_48/eritrea.png';
    import estonia from './assets/png_48/estonia.png';
    import ethiopia from './assets/png_48/ethiopia.png';
    import falkland from './assets/png_48/falkland-islands.png';
    import faroe from './assets/png_48/faroe-islands.png';
    import fiji from './assets/png_48/fiji.png';
    import finland from './assets/png_48/finland.png';
    import france from './assets/png_48/france.png';
    import french from './assets/png_48/french-guiana.png';
    import french_p from './assets/png_48/french-polynesia.png';
    import gabon from './assets/png_48/gabon.png';
    import gambia from './assets/png_48/gambia.png';
    import georgia from './assets/png_48/georgia.png';
    import germany from './assets/png_48/germany.png';
    import ghana from './assets/png_48/ghana.png';
    import gibraltar from './assets/png_48/gibraltar.png';
    import greece from './assets/png_48/greece.png';
    import greenland from './assets/png_48/greenland.png';
    import grenada from './assets/png_48/grenada.png';
    import guadeloupe from './assets/png_48/guadeloupe.png';
    import guam from './assets/png_48/guam.png';
    import guatemala from './assets/png_48/guatemala.png';
    import guineac from './assets/png_48/guinea.png';
    import guinea_b from './assets/png_48/guinea-bissau.png';
    import guyana from './assets/png_48/guyana.png';
    import haiti from './assets/png_48/haiti.png';
    import honduras from './assets/png_48/honduras.png';
    import hong from './assets/png_48/hong-kong.png';
    import hungary from './assets/png_48/hungary.png';
    import iceland from './assets/png_48/iceland.png';
    import india from './assets/png_48/india.png';
    import indonesia from './assets/png_48/indonesia.png';
    import iraq from './assets/png_48/iraq.png';
    import ireland from './assets/png_48/ireland.png';
    import israel from './assets/png_48/israel.png';
    import italy from './assets/png_48/italy.png';
    import jamaica from './assets/png_48/jamaica.png';
    import japan from './assets/png_48/japan.png';
    import jordan from './assets/png_48/jordan.png';
    import kazakhstan from './assets/png_48/kazakhstan.png';
    import kenya from './assets/png_48/kenya.png';
    import kiribati from './assets/png_48/kiribati.png';
    import nort_k from './assets/png_48/north-korea.png';
    import south_k from './assets/png_48/south-korea.png';
    import kuwait from './assets/png_48/kuwait.png';
    import kyrgyzstan from './assets/png_48/kyrgyzstan.png';
    import laos from './assets/png_48/laos.png';
    import latvia from './assets/png_48/latvia.png';
    import lebanon from './assets/png_48/lebanon.png';
    import lesotho from './assets/png_48/lesotho.png';
    import liberia from './assets/png_48/liberia.png';
    import libya from './assets/png_48/libya.png';
    import liechtenstein from './assets/png_48/liechtenstein.png';
    import lithuania from './assets/png_48/lithuania.png';
    import luxembourg from './assets/png_48/luxembourg.png';
    import mali from './assets/png_48/mali.png';
    import macedonia from './assets/png_48/former-yugoslav-republic-of-macedonia.png';
    import madagascar from './assets/png_48/madagascar.png';
    import malawi from './assets/png_48/malawi.png';
    import malaysia from './assets/png_48/malaysia.png';
    import maldives from './assets/png_48/maldives.png';
    import malta from './assets/png_48/malta.png';
    import marshall from './assets/png_48/marshall-islands.png';
    import martinique from './assets/png_48/martinique.png';
    import mauritania from './assets/png_48/mauritania.png';
    import mayotte from './assets/png_48/mayotte.png';
    import mexico from './assets/png_48/mexico.png';
    import micronesia from './assets/png_48/federated-states-of-micronesia.png';
    import moldova from './assets/png_48/moldova.png';
    import monaco from './assets/png_48/monaco.png';
    import afghanistan from './assets/png_48/afghanistan.png';
    import morocco from './assets/png_48/morocco.png';
    import mozambique from './assets/png_48/mozambique.png';
    import myanmar from './assets/png_48/myanmar.png';
    import namibia from './assets/png_48/namibia.png';
    import nauru from './assets/png_48/nauru.png';
    import nepal from './assets/png_48/nepal.png';
    import netherlands from './assets/png_48/netherlands.png';
    import caledonia from './assets/png_48/new-caledonia.png';
    import zealand from './assets/png_48/new-zealand.png';
    import nicaragua from './assets/png_48/nicaragua.png';
    import niger from './assets/png_48/niger.png';
    import nigeria from './assets/png_48/nigeria.png';
    import niue from './assets/png_48/niue.png';
    import norfolk from './assets/png_48/norfolk-island.png';
    import northern_m from './assets/png_48/northern-mariana-islands.png';
    import norway from './assets/png_48/norway.png';
    import oman from './assets/png_48/oman.png';
    import palau from './assets/png_48/palau.png';
    import panama from './assets/png_48/panama.png';
    import papua from './assets/png_48/papua-new-guinea.png';
    import paraguay from './assets/png_48/paraguay.png';
    import peru from './assets/png_48/peru.png';
    import philippines from './assets/png_48/philippines.png';
    import poland from './assets/png_48/poland.png';
    import portugal from './assets/png_48/portugal.png';
    import puerto from './assets/png_48/puerto-rico.png';
    import qatar from './assets/png_48/qatar.png';
    import reunion from './assets/png_48/british-indian-ocean-territory.png';
    import romania from './assets/png_48/romania.png';
    import rwanda from './assets/png_48/rwanda.png';
    import san_m from './assets/png_48/san-marino.png';
    import tome from './assets/png_48/sao-tome-and-principe.png';
    import saudi from './assets/png_48/saudi-arabia.png';
    import senegal from './assets/png_48/senegal.png';
    import serbia from './assets/png_48/serbia.png';
    import seychelles from './assets/png_48/seychelles.png';
    import sierra_l from './assets/png_48/sierra-leone.png';
    import singapore from './assets/png_48/singapore.png';
    import slovak from './assets/png_48/slovakia.png';
    import slovenia from './assets/png_48/slovenia.png';
    import solomon from './assets/png_48/solomon-islands.png';
    import somalia from './assets/png_48/somalia.png';
    import south_a from './assets/png_48/south-africa.png';
    import spain from './assets/png_48/spain.png';
    import thailand from './assets/png_48/thailand.png';
    import lanka from './assets/png_48/sri-lanka-srilanka.png';
    import helena from './assets/png_48/saint-helena-ascension-and-tristan-da-cunha.png';
    import kitts from './assets/png_48/saint-kitts-and-nevis.png';
    import saint from './assets/png_48/saint-lucia.png';
    import russia from './assets/png_48/russia.png';
    import sudan from './assets/png_48/sudan.png';
    import suriname from './assets/png_48/suriname.png';
    import swaziland from './assets/png_48/swaziland.png';
    import sweden from './assets/png_48/sweden.png';
    import switzerland from './assets/png_48/switzerland.png';
    import syrian_a from './assets/png_48/syrian-arab-republic.png';
    import taiwan from './assets/png_48/taiwan.png';
    import tajikistan from './assets/png_48/tajikistan.png';
    import togo from './assets/png_48/togo.png';
    import tonga from './assets/png_48/tonga.png';
    import trinidad from './assets/png_48/trinidad-and-tobago.png';
    import tunisia from './assets/png_48/tunisia.png';
    import turkey from './assets/png_48/turkey.png';
    import turkmenistan from './assets/png_48/turkmenistan.png';
    import turks from './assets/png_48/turks-and-caicos-islands.png';
    import tuvalu from './assets/png_48/tuvalu.png';
    import uganda from './assets/png_48/uganda.png';
    import ukraine from './assets/png_48/ukraine.png';
    import arab_e from './assets/png_48/united-arab-emirates.png';
    import uzbekistan from './assets/png_48/uzbekistan.png';
    import uruguay from './assets/png_48/uruguay.png';
    import vanuatu from './assets/png_48/vanuatu.png';
    import venezuela from './assets/png_48/venezuela-bolivarian-republic.png';
    import vietnam from './assets/png_48/vietnam.png';
    import virgin_bi from './assets/png_48/virgin-islands-british.png';
    import virgin_i from './assets/png_48/virgin-islands.png';
    import wallis from './assets/png_48/wallis-and-futuna.png';
    import yemen from './assets/png_48/yemen.png';
    import zambia from './assets/png_48/zambia.png';
    import iran from './assets/png_48/zimbabwe.png';
    import montserrat from './assets/png_48/montserrat.png';
    import zimbabwe from './assets/png_48/zimbabwe.png';
    
    

    //import {ReactComponent as ReactLogo} from './germany.svg';

    export default function Cuntry_co({ddActive,ddInactive,ste,cfn,defultfl2 }) {


        return (
            

 <div id="allddm" onClick={ddInactive} >
          <div id="dconf" >
             <div id="drop5G" >
             <ul id="dul" >
            <div id="lis_lef" className="+1" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={usa} />) ) } ><img alt="img" id="iclip" src={usa} /><button id="spance" value="+1" >USA (+1)</button> </div>
            <div id="lis_lef" className="+44" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={uk} />) )} ><img alt="img" id="iclip" src={uk} /><button id="spance" value="+44" >UK (+44) </button> </div>  
<div>
            <div id="lis_lef" className="+213"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={algeria} />) )}  ><img alt="img" id="iclip" src={algeria} /><button  id="spance" data-countryCode="DZ" value="+213">Algeria (+213)</button></div>
            <div id="lis_lef" className="+376" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={andorra} />) )} ><img alt="img" id="iclip" src={andorra} /><button  id="spance" data-countryCode="AD" value="+376">Andorra (+376)</button></div>
            <div id="lis_lef" className="+244" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={angola} />) )} ><img alt="img" id="iclip" src={angola} /><button  id="spance" data-countryCode="AO" value="+244">Angola (+244)</button></div>
            <div id="lis_lef" className="+1264" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={anguilla} />) )} ><img alt="img" id="iclip" src={anguilla} /><button  id="spance" data-countryCode="AI" value="+1264">Anguilla (+1264)</button></div>
            <div id="lis_lef" className="+1268" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={antigua} />) )} ><img alt="img" id="iclip" src={antigua} /><button  id="spance" data-countryCode="AG" value="+1268">Antigua (+1268)</button></div>
            <div id="lis_lef" className="+54" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={argentina} />) )} ><img alt="img" id="iclip" src={argentina} /><button  id="spance" data-countryCode="AR" value="+54">Argentina (+54)</button></div>
            <div id="lis_lef" className="+374" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={armenia} />) )} ><img alt="img" id="iclip" src={armenia} /><button  id="spance" data-countryCode="AM" value="+374">Armenia (+374)</button></div>
            <div id="lis_lef" className="+297" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={aruba} />) )} ><img alt="img" id="iclip" src={aruba} /><button  id="spance" data-countryCode="AW" value="+297">Aruba (+297)</button></div>
            <div id="lis_lef" className="+61" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={austallia} />) )} ><img alt="img" id="iclip" src={austallia} /><button  id="spance" data-countryCode="AU" value="+61">Australia (+61)</button></div>
            <div id="lis_lef" className="+43" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={austria} />) )} ><img alt="img" id="iclip" src={austria} /><button  id="spance" data-countryCode="AT" value="+43">Austria (+43)</button></div>
            <div id="lis_lef" className="+994" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={azerbaijan} />) )} ><img alt="img" id="iclip" src={azerbaijan} /><button  id="spance" data-countryCode="AZ" value="+994">Azerbaijan (+994)</button></div>
            <div id="lis_lef" className="+1242" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bahamas} />) )} ><img alt="img" id="iclip" src={bahamas} /><button  id="spance" data-countryCode="BS" value="+1242">Bahamas (+1242)</button></div>
            <div id="lis_lef" className="+973" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bahrain} />) )} ><img alt="img" id="iclip" src={bahrain} /><button  id="spance" data-countryCode="BH" value="+973">Bahrain (+973)</button></div>
            <div id="lis_lef" className="+880" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bangladesh} />) )} ><img alt="img" id="iclip" src={bangladesh} /><button  id="spance" data-countryCode="BD" value="+880">Bangladesh (+880)</button></div>
            <div id="lis_lef" className="+1246" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={barbados} />) )} ><img alt="img" id="iclip" src={barbados} /><button  id="spance" data-countryCode="BB" value="+1246">Barbados (+1246)</button></div>
            <div id="lis_lef" className="+375" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={belgium} />) )} ><img alt="img" id="iclip" src={belarus} /><button  id="spance" data-countryCode="BY" value="+375">Belarus (+375)</button></div>
            <div id="lis_lef" className="+32" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={belgium} />) )} ><img alt="img" id="iclip" src={belgium} /><button  id="spance" data-countryCode="BE" value="+32">Belgium (+32)</button></div>
            <div id="lis_lef" className="+501" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={belize} />) )} ><img alt="img" id="iclip" src={belize} /><button  id="spance" data-countryCode="BZ" value="+501">Belize (+501)</button></div>
            <div id="lis_lef" className="+229" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={benin} />) )} ><img alt="img" id="iclip" src={benin} /><button  id="spance" data-countryCode="BJ" value="+229">Benin (+229)</button></div>
            <div id="lis_lef" className="+1441" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bermuda} />) )} ><img alt="img" id="iclip" src={bermuda} /><button  id="spance" data-countryCode="BM" value="+1441">Bermuda (+1441)</button></div>
            <div id="lis_lef" className="+975" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bhutan} />) )} ><img alt="img" id="iclip" src={bhutan} /><button  id="spance" data-countryCode="BT" value="+975">Bhutan (+975)</button></div>
            <div id="lis_lef" className="+591" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bolivia} />) )} ><img alt="img" id="iclip" src={bolivia} /><button  id="spance" data-countryCode="BO" value="+591">Bolivia (+591)</button></div>
            <div id="lis_lef" className="+387" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bosnia} />) )} ><img alt="img" id="iclip" src={bosnia} /><button  id="spance" data-countryCode="BA" value="+387">Bosnia Herzegovina (+387)</button></div>
            <div id="lis_lef" className="+267" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bostwana} />) )} ><img alt="img" id="iclip" src={bostwana} /><button  id="spance" data-countryCode="BW" value="+267">Botswana (+267)</button></div>
               </div>        
         
         <div>
            <div id="lis_lef" className="+55"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={brazil} />) )} ><img alt="img" id="iclip" src={brazil} /><button  id="spance" data-countryCode="BR" value="+55">Brazil (+55)</button></div>
            <div id="lis_lef" className="+673"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={brunei} />) )} ><img alt="img" id="iclip" src={brunei} /><button  id="spance" data-countryCode="BN" value="+673">Brunei (+673)</button></div>
            <div id="lis_lef" className="+359"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={bulgaria} />) )} ><img alt="img" id="iclip" src={bulgaria} /><button  id="spance" data-countryCode="BG" value="+359">Bulgaria (+359)</button></div>
            <div id="lis_lef" className="+226"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={burkina} />) )} ><img alt="img" id="iclip" src={burkina} /><button  id="spance" data-countryCode="BF" value="+226">Burkina Faso (+226)</button></div>
            <div id="lis_lef" className="+257"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={burundi} />) )} ><img alt="img" id="iclip" src={burundi} /><button  id="spance" data-countryCode="BI" value="+257">Burundi (+257)</button></div>
            <div id="lis_lef" className="+855"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={Cambodia} />) )} ><img alt="img" id="iclip" src={Cambodia} /><button  id="spance" data-countryCode="KH" value="+855">Cambodia (+855)</button></div>
            <div id="lis_lef" className="+237"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={cameroon} />) )} ><img alt="img" id="iclip" src={cameroon} /><button  id="spance" data-countryCode="CM" value="+237">Cameroon (+237)</button></div>
            <div id="lis_lef" className="+1"    onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={canada} />) )} ><img alt="img" id="iclip" src={canada} /><button  id="spance" data-countryCode="CA" value="+1">Canada (+1)</button></div>
            <div id="lis_lef" className="+238"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={cabo} />) )} ><img alt="img" id="iclip" src={cabo} /><button  id="spance" data-countryCode="CV" value="+238">Cape Verde Islands (+238)</button></div>
            <div id="lis_lef" className="+1345" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={cayman} />) )} ><img alt="img" id="iclip" src={cayman} /><button  id="spance" data-countryCode="KY" value="+1345">Cayman Islands (+1345)</button></div>
            <div id="lis_lef" className="+236"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={c_a_R} />) )} ><img alt="img" id="iclip" src={c_a_R} /><button  id="spance" data-countryCode="CF" value="+236">Central African Republic (+236)</button></div>
            <div id="lis_lef" className="+56"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={chile} />) )} ><img alt="img" id="iclip" src={chile} /><button  id="spance" data-countryCode="CL" value="+56">Chile (+56)</button></div>
            <div id="lis_lef" className="+86"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={china} />) )} ><img alt="img" id="iclip" src={china} /><button  id="spance" data-countryCode="CN" value="+86">China (+86)</button></div>
            <div id="lis_lef" className="+57"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={colombia} />) )} ><img alt="img" id="iclip" src={colombia} /><button  id="spance" data-countryCode="CO" value="+57">Colombia (+57)</button></div>
            <div id="lis_lef" className="+269"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={comoros} />) )} ><img alt="img" id="iclip" src={comoros} /><button  id="spance" data-countryCode="KM" value="+269">Comoros (+269)</button></div>
            <div id="lis_lef" className="+242"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={democratic} />) )} ><img alt="img" id="iclip" src={democratic} /><button  id="spance" data-countryCode="CG" value="+242">Congo (+242)</button></div>
            <div id="lis_lef" className="+682"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={cook} />) )} ><img alt="img" id="iclip" src={cook} /><button  id="spance" data-countryCode="CK" value="+682">Cook Islands (+682)</button></div>
            <div id="lis_lef" className="+506"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={costa} />) )} ><img alt="img" id="iclip" src={costa} /><button  id="spance" data-countryCode="CR" value="+506">Costa Rica (+506)</button></div>
            <div id="lis_lef" className="+385"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={croatia} />) )} ><img alt="img" id="iclip" src={croatia} /><button  id="spance" data-countryCode="HR" value="+385">Croatia (+385)</button></div>
            <div id="lis_lef" className="+53"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={cuba} />) )} ><img alt="img" id="iclip" src={cuba} /><button  id="spance" data-countryCode="CU" value="+53">Cuba (+53)</button></div>
            <div id="lis_lef" className="+90392" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={cyprus} />) )} ><img alt="img" id="iclip" src={cyprus} /><button  id="spance" data-countryCode="CY" value="+90392">Cyprus North (+90392)</button></div>
            <div id="lis_lef" className="+357"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={cyprus} />) )} ><img alt="img" id="iclip" src={cyprus} /><button  id="spance" data-countryCode="CY" value="+357">Cyprus South (+357)</button></div>
            <div id="lis_lef" className="+42"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={czech} />) )} ><img alt="img" id="iclip" src={czech} /><button  id="spance" data-countryCode="CZ" value="+42">Czech Republic (+42)</button></div>
            <div id="lis_lef" className="+45"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={denmark} />) )} ><img alt="img" id="iclip" src={denmark} /><button  id="spance" data-countryCode="DK" value="+45">Denmark (+45)</button></div>
            <div id="lis_lef" className="+253"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={djibouti} />) )} ><img alt="img" id="iclip" src={djibouti} /><button  id="spance" data-countryCode="DJ" value="+253">Djibouti (+253)</button></div>
            <div id="lis_lef" className="+1809" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={dominica}  />) )} ><img alt="img" id="iclip" src={dominica} /><button  id="spance" data-countryCode="DM" value="+1809">Dominica (+1809)</button></div>
            <div id="lis_lef" className="+1809" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={dominican} />) )} ><img alt="img" id="iclip" src={dominican} /><button  id="spance" data-countryCode="DO" value="+1809">Dominican Republic (+1809)</button></div>
            <div id="lis_lef" className="+593"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={ecuador} />) )} ><img alt="img" id="iclip" src={ecuador} /><button  id="spance" data-countryCode="EC" value="+593">Ecuador (+593)</button></div>
            <div id="lis_lef" className="+20"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={egypt} />) )} ><img alt="img" id="iclip" src={egypt} /><button  id="spance" data-countryCode="EG" value="+20">Egypt (+20)</button></div>
            <div id="lis_lef" className="+503"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={el} />) )} ><img alt="img" id="iclip" src={el} /><button  id="spance" data-countryCode="SV" value="+503">El Salvador (+503)</button></div>
            <div id="lis_lef" className="+240"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={guinea} />) )} ><img alt="img" id="iclip" src={guinea} /><button  id="spance" data-countryCode="GQ" value="+240">Equatorial Guinea (+240)</button></div>
            <div id="lis_lef" className="+291"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={eritrea} />) )} ><img alt="img" id="iclip" src={eritrea} /><button  id="spance" data-countryCode="ER" value="+291">Eritrea (+291)</button></div>
            <div id="lis_lef" className="+372"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={estonia} />) )} ><img alt="img" id="iclip" src={estonia} /><button  id="spance" data-countryCode="EE" value="+372">Estonia (+372)</button></div>
            </div>


<div>
            <div id="lis_lef" className="+251"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={ethiopia} />) )} ><img alt="img" id="iclip" src={ethiopia} /><button  id="spance" data-countryCode="ET" value="+251">Ethiopia (+251)</button></div>
            <div id="lis_lef" className="+500"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={falkland} />) )} ><img alt="img" id="iclip" src={falkland} /><button  id="spance" data-countryCode="FK" value="+500">Falkland Islands (+500)</button></div>
            <div id="lis_lef" className="+298"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={faroe} />) )} ><img alt="img" id="iclip" src={faroe} /><button  id="spance" data-countryCode="FO" value="+298">Faroe Islands (+298)</button></div>
            <div id="lis_lef" className="+679"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={fiji} />) )} ><img alt="img" id="iclip" src={fiji} /><button  id="spance" data-countryCode="FJ" value="+679">Fiji (+679)</button></div>
            <div id="lis_lef" className="+358"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={finland} />) )} ><img alt="img" id="iclip" src={finland} /><button  id="spance" data-countryCode="FI" value="+358">Finland (+358)</button></div>
            <div id="lis_lef" className="+33"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={france} />) )} ><img alt="img" id="iclip" src={france} /><button  id="spance" data-countryCode="FR" value="+33">France (+33)</button></div>
            <div id="lis_lef" className="+594"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={french} />) )} ><img alt="img" id="iclip" src={french} /><button  id="spance" data-countryCode="GF" value="+594">French Guiana (+594)</button></div>
            <div id="lis_lef" className="+689"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={french_p} />) )} ><img alt="img" id="iclip" src={french_p} /><button  id="spance" data-countryCode="PF" value="+689">French Polynesia (+689)</button></div>
            <div id="lis_lef" className="+241"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={gabon} />) )} ><img alt="img" id="iclip" src={gabon} /><button  id="spance" data-countryCode="GA" value="+241">Gabon (+241)</button></div>
            <div id="lis_lef" className="+220"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={gambia} />) )} ><img alt="img" id="iclip" src={gambia} /><button  id="spance" data-countryCode="GM" value="+220">Gambia (+220)</button></div>
            <div id="lis_lef" className="+7880" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={georgia} />) )} ><img alt="img" id="iclip" src={georgia} /><button  id="spance" data-countryCode="GE" value="+7880">Georgia (+7880)</button></div>
            <div id="lis_lef" className="+49"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={germany} />) )} ><img alt="img" id="iclip" src={germany} /><button  id="spance" data-countryCode="DE" value="+49">Germany (+49)</button></div>
            <div id="lis_lef" className="+233"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={ghana} />) )} ><img alt="img" id="iclip" src={ghana} /><button  id="spance" data-countryCode="GH" value="+233">Ghana (+233)</button></div>
            <div id="lis_lef" className="+350"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={gibraltar} />) )} ><img alt="img" id="iclip" src={gibraltar} /><button  id="spance" data-countryCode="GI" value="+350">Gibraltar (+350)</button></div>
            <div id="lis_lef" className="+30"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={greece} />) )} ><img alt="img" id="iclip" src={greece} /><button  id="spance" data-countryCode="GR" value="+30">Greece (+30)</button></div>
            <div id="lis_lef" className="+299"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={greenland} />) )} ><img alt="img" id="iclip" src={greenland} /><button  id="spance" data-countryCode="GL" value="+299">Greenland (+299)</button></div>
            <div id="lis_lef" className="+1473" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={grenada} />) )} ><img alt="img" id="iclip" src={grenada} /><button  id="spance" data-countryCode="GD" value="+1473">Grenada (+1473)</button></div>
            <div id="lis_lef" className="+590"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={guadeloupe} />) )} ><img alt="img" id="iclip" src={guadeloupe} /><button  id="spance" data-countryCode="GP" value="+590">Guadeloupe (+590)</button></div>
            <div id="lis_lef" className="+671"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={guam} />) )} ><img alt="img" id="iclip" src={guam} /><button  id="spance" data-countryCode="GU" value="+671">Guam (+671)</button></div>
            <div id="lis_lef" className="+502"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={guatemala} />) )} ><img alt="img" id="iclip" src={guatemala} /><button  id="spance" data-countryCode="GT" value="+502">Guatemala (+502)</button></div>
            <div id="lis_lef" className="+224"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={guineac} />) )} ><img alt="img" id="iclip" src={guineac} /><button  id="spance" data-countryCode="GN" value="+224">Guinea (+224)</button></div>
            <div id="lis_lef" className="+245"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={guinea_b} />) )} ><img alt="img" id="iclip" src={guinea_b} /><button  id="spance" data-countryCode="GW" value="+245">Guinea - Bissau (+245)</button></div>
            <div id="lis_lef" className="+592"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={guyana} />) )} ><img alt="img" id="iclip" src={guyana} /><button  id="spance" data-countryCode="GY" value="+592">Guyana (+592)</button></div>
            <div id="lis_lef" className="+509"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={haiti} />) )} ><img alt="img" id="iclip" src={haiti} /><button  id="spance" data-countryCode="HT" value="+509">Haiti (+509)</button></div>
            <div id="lis_lef" className="+504"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={honduras} />) )} ><img alt="img" id="iclip" src={honduras} /><button  id="spance" data-countryCode="HN" value="+504">Honduras (+504)</button></div>
            <div id="lis_lef" className="+852"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={hong} />) )} ><img alt="img" id="iclip" src={hong} /><button  id="spance" data-countryCode="HK" value="+852">Hong Kong (+852)</button></div>
            <div id="lis_lef" className="+36"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={hungary} />) )} ><img alt="img" id="iclip" src={hungary} /><button  id="spance" data-countryCode="HU" value="+36">Hungary (+36)</button></div>
            <div id="lis_lef" className="+354"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={iceland} />) )} ><img alt="img" id="iclip" src={iceland} /><button  id="spance" data-countryCode="IS" value="+354">Iceland (+354)</button></div>
            <div id="lis_lef" className="+91"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={india} />) )} ><img alt="img" id="iclip" src={india} /><button  id="spance" data-countryCode="IN" value="+91">India (+91)</button></div>
            <div id="lis_lef" className="+62"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={indonesia} />) )} ><img alt="img" id="iclip" src={indonesia} /><button  id="spance" data-countryCode="ID" value="+62">Indonesia (+62)</button></div>
            <div id="lis_lef" className="+98"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={iran} />) )} ><img alt="img" id="iclip" src={iran} /><button  id="spance" data-countryCode="IR" value="+98">Iran (+98)</button></div>
            <div id="lis_lef" className="+964"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={iraq} />) )} ><img alt="img" id="iclip" src={iraq} /><button  id="spance" data-countryCode="IQ" value="+964">Iraq (+964)</button></div>
            <div id="lis_lef" className="+353"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={ireland} />) )} ><img alt="img" id="iclip" src={ireland} /><button  id="spance" data-countryCode="IE" value="+353">Ireland (+353)</button></div>
            <div id="lis_lef" className="+972"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={israel} />) )} ><img alt="img" id="iclip" src={israel} /><button  id="spance" data-countryCode="IL" value="+972">Israel (+972)</button></div>
            <div id="lis_lef" className="+39"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={italy} />) )} ><img alt="img" id="iclip" src={italy} /><button  id="spance" data-countryCode="IT" value="+39">Italy (+39)</button></div>
            <div id="lis_lef" className="+1876" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={jamaica} />) )} ><img alt="img" id="iclip" src={jamaica} /><button  id="spance" data-countryCode="JM" value="+1876">Jamaica (+1876)</button></div>
            <div id="lis_lef" className="+81"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={japan} />) )} ><img alt="img" id="iclip" src={japan} /><button  id="spance" data-countryCode="JP" value="+81">Japan (+81)</button></div>
            <div id="lis_lef" className="+962"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={jordan} />) )} ><img alt="img" id="iclip" src={jordan} /><button  id="spance" data-countryCode="JO" value="+962">Jordan (+962)</button></div>
            <div id="lis_lef" className="+7"    onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={kazakhstan} />) )} ><img alt="img" id="iclip" src={kazakhstan} /><button  id="spance" data-countryCode="KZ" value="+7">Kazakhstan (+7)</button></div>
            <div id="lis_lef" className="+254"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={kenya} />) )} ><img alt="img" id="iclip" src={kenya} /><button  id="spance" data-countryCode="KE" value="+254">Kenya (+254)</button></div>
            <div id="lis_lef" className="+686"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={kiribati} />) )} ><img alt="img" id="iclip" src={kiribati} /><button  id="spance" data-countryCode="KI" value="+686">Kiribati (+686)</button></div>
            <div id="lis_lef" className="+850"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={nort_k} />) )} ><img alt="img" id="iclip" src={nort_k} /><button  id="spance" data-countryCode="KP" value="+850">Korea North (+850)</button></div>
            </div>   
            
            <div>
            <div id="lis_lef" className="+82"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={south_k} />) )} ><img alt="img" id="iclip" src={south_k} /><button  id="spance" data-countryCode="KR" value="+82">Korea South (+82)</button></div>
            <div id="lis_lef" className="+965" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={kuwait} />) )} ><img alt="img" id="iclip" src={kuwait} /><button  id="spance" data-countryCode="KW" value="+965">Kuwait (+965)</button></div>
            <div id="lis_lef" className="+996" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={kyrgyzstan} />) )} ><img alt="img" id="iclip" src={kyrgyzstan} /><button  id="spance" data-countryCode="KG" value="+996">Kyrgyzstan (+996)</button></div>
            <div id="lis_lef" className="+856" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={laos} />) )} ><img alt="img" id="iclip" src={laos} /><button  id="spance" data-countryCode="LA" value="+856">Laos (+856)</button></div>
            <div id="lis_lef" className="+371" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={latvia} />) )} ><img alt="img" id="iclip" src={latvia} /><button  id="spance" data-countryCode="LV" value="+371">Latvia (+371)</button></div>
            <div id="lis_lef" className="+961" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={lebanon} />) )} ><img alt="img" id="iclip" src={lebanon} /><button  id="spance" data-countryCode="LB" value="+961">Lebanon (+961)</button></div>
            <div id="lis_lef" className="+266" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={lesotho} />) )} ><img alt="img" id="iclip" src={lesotho} /><button  id="spance" data-countryCode="LS" value="+266">Lesotho (+266)</button></div>
            <div id="lis_lef" className="+231" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={liberia} />) )} ><img alt="img" id="iclip" src={liberia} /><button  id="spance" data-countryCode="LR" value="+231">Liberia (+231)</button></div>
            <div id="lis_lef" className="+218" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={libya} />) )} ><img alt="img" id="iclip" src={libya} /><button  id="spance" data-countryCode="LY" value="+218">Libya (+218)</button></div>
            <div id="lis_lef" className="+417" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={liechtenstein} />) )} ><img alt="img" id="iclip" src={liechtenstein} /><button  id="spance" data-countryCode="LI" value="+417">Liechtenstein (+417)</button></div>
            <div id="lis_lef" className="+370" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={lithuania} />) )} ><img alt="img" id="iclip" src={lithuania} /><button  id="spance" data-countryCode="LT" value="+370">Lithuania (+370)</button></div>
            <div id="lis_lef" className="+352" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={luxembourg} />) )} ><img alt="img" id="iclip" src={luxembourg} /><button  id="spance" data-countryCode="LU" value="+352">Luxembourg (+352)</button></div>
            <div id="lis_lef" className="+853" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={mali} />) )} ><img alt="img" id="iclip" src={mali} /><button  id="spance" data-countryCode="MO" value="+853">Macao (+853)</button></div>
            <div id="lis_lef" className="+389" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={macedonia} />) )} ><img alt="img" id="iclip" src={macedonia} /><button  id="spance" data-countryCode="MK" value="+389">Macedonia (+389)</button></div>
            <div id="lis_lef" className="+261" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={madagascar} />) )} ><img alt="img" id="iclip" src={madagascar} /><button  id="spance" data-countryCode="MG" value="+261">Madagascar (+261)</button></div>
            <div id="lis_lef" className="+265" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={malawi} />) )} ><img alt="img" id="iclip" src={malawi} /><button  id="spance" data-countryCode="MW" value="+265">Malawi (+265)</button></div>
            <div id="lis_lef" className="+60"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={malaysia} />) )} ><img alt="img" id="iclip" src={malaysia} /><button  id="spance" data-countryCode="MY" value="+60">Malaysia (+60)</button></div>
            <div id="lis_lef" className="+960" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={maldives} />) )} ><img alt="img" id="iclip" src={maldives} /><button  id="spance" data-countryCode="MV" value="+960">Maldives (+960)</button></div>
            <div id="lis_lef" className="+223" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={mali} />) )} ><img alt="img" id="iclip" src={mali} /><button  id="spance" data-countryCode="ML" value="+223">Mali (+223)</button></div>
            <div id="lis_lef" className="+356" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={malta} />) )} ><img alt="img" id="iclip" src={malta} /><button  id="spance" data-countryCode="MT" value="+356">Malta (+356)</button></div>
            <div id="lis_lef" className="+692" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={marshall} />) )} ><img alt="img" id="iclip" src={marshall} /><button  id="spance" data-countryCode="MH" value="+692">Marshall Islands (+692)</button></div>
            <div id="lis_lef" className="+596" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={martinique} />) )} ><img alt="img" id="iclip" src={martinique} /><button  id="spance" data-countryCode="MQ" value="+596">Martinique (+596)</button></div>
            <div id="lis_lef" className="+222" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={mauritania} />) )} ><img alt="img" id="iclip" src={mauritania} /><button  id="spance" data-countryCode="MR" value="+222">Mauritania (+222)</button></div>
            <div id="lis_lef" className="+269" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={mayotte} />) )} ><img alt="img" id="iclip" src={mayotte} /><button  id="spance" data-countryCode="YT" value="+269">Mayotte (+269)</button></div>
            <div id="lis_lef" className="+52"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={mexico} />) )} ><img alt="img" id="iclip" src={mexico} /><button  id="spance" data-countryCode="MX" value="+52">Mexico (+52)</button></div>
            <div id="lis_lef" className="+691" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={micronesia} />) )} ><img alt="img" id="iclip" src={micronesia} /><button  id="spance" data-countryCode="FM" value="+691">Micronesia (+691)</button></div>
            <div id="lis_lef" className="+373" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={moldova} />) )} ><img alt="img" id="iclip" src={moldova} /><button  id="spance" data-countryCode="MD" value="+373">Moldova (+373)</button></div>
            <div id="lis_lef" className="+377" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={monaco} />) )} ><img alt="img" id="iclip" src={monaco} /><button  id="spance" data-countryCode="MC" value="+377">Monaco (+377)</button></div>
            <div id="lis_lef" className="+976" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={afghanistan} />) )} ><img alt="img" id="iclip" src={afghanistan} /><button  id="spance" data-countryCode="MN" value="+976">Mongolia (+976)</button></div>
            <div id="lis_lef" className="+1664" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={montserrat} />) )} ><img alt="img" id="iclip" src={montserrat} /><button  id="spance" data-countryCode="MS" value="+1664">Montserrat (+1664)</button></div>
            <div id="lis_lef" className="+212" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={morocco} />) )} ><img alt="img" id="iclip" src={morocco} /><button  id="spance" data-countryCode="MA" value="+212">Morocco (+212)</button></div>
            <div id="lis_lef" className="+258" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={mozambique} />) )} ><img alt="img" id="iclip" src={mozambique} /><button  id="spance" data-countryCode="MZ" value="+258">Mozambique (+258)</button></div>
            <div id="lis_lef" className="+95"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={myanmar} />) )} ><img alt="img" id="iclip" src={myanmar} /><button  id="spance" data-countryCode="MN" value="+95">Myanmar (+95)</button></div>
            <div id="lis_lef" className="+264" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={namibia} />) )} ><img alt="img" id="iclip" src={namibia} /><button  id="spance" data-countryCode="NA" value="+264">Namibia (+264)</button></div>
            <div id="lis_lef" className="+674" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={nauru} />) )} ><img alt="img" id="iclip" src={nauru} /><button  id="spance" data-countryCode="NR" value="+674">Nauru (+674)</button></div>
            <div id="lis_lef" className="+977" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={nepal} />) )} ><img alt="img" id="iclip" src={nepal} /><button  id="spance" data-countryCode="NP" value="+977">Nepal (+977)</button></div>
            </div>
            
            <div>
            <div id="lis_lef" className="+31"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={netherlands} />) )} ><img alt="img" id="iclip" src={netherlands} /><button  id="spance" data-countryCode="NL" value="+31">Netherlands (+31)</button></div>
            <div id="lis_lef" className="+687" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={caledonia} />) )} ><img alt="img" id="iclip" src={caledonia} /><button  id="spance" data-countryCode="NC" value="+687">New Caledonia (+687)</button></div>
            <div id="lis_lef" className="+64"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={zealand} />) )} ><img alt="img" id="iclip" src={zealand} /><button  id="spance" data-countryCode="NZ" value="+64">New Zealand (+64)</button></div>
            <div id="lis_lef" className="+505" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={nicaragua} />) )} ><img alt="img" id="iclip" src={nicaragua} /><button  id="spance" data-countryCode="NI" value="+505">Nicaragua (+505)</button></div>
            <div id="lis_lef" className="+227" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={niger} />) )} ><img alt="img" id="iclip" src={niger} /><button  id="spance" data-countryCode="NE" value="+227">Niger (+227)</button></div>
            <div id="lis_lef" className="+234" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={nigeria} />) )} ><img alt="img" id="iclip" src={nigeria} /><button  id="spance" data-countryCode="NG" value="+234">Nigeria (+234)</button></div>
            <div id="lis_lef" className="+683" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={niue} />) )} ><img alt="img" id="iclip" src={niue} /><button  id="spance" data-countryCode="NU" value="+683">Niue (+683)</button></div>
            <div id="lis_lef" className="+672" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={norfolk} />) )} ><img alt="img" id="iclip" src={norfolk} /><button  id="spance" data-countryCode="NF" value="+672">Norfolk Islands (+672)</button></div>
            <div id="lis_lef" className="+670" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={northern_m} />) )} ><img alt="img" id="iclip" src={northern_m} /><button  id="spance" data-countryCode="NP" value="+670">Northern Marianas (+670)</button></div>
            <div id="lis_lef" className="+47"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={norway} />) )} ><img alt="img" id="iclip" src={norway} /><button  id="spance" data-countryCode="NO" value="+47">Norway (+47)</button></div>
            <div id="lis_lef" className="+968" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={oman} />) )} ><img alt="img" id="iclip" src={oman} /><button  id="spance" data-countryCode="OM" value="+968">Oman (+968)</button></div>
            <div id="lis_lef" className="+680" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={palau} />) )} ><img alt="img" id="iclip" src={palau} /><button  id="spance" data-countryCode="PW" value="+680">Palau (+680)</button></div>
            <div id="lis_lef" className="+507" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={panama} />) )} ><img alt="img" id="iclip" src={panama} /><button  id="spance" data-countryCode="PA" value="+507">Panama (+507)</button></div>
            <div id="lis_lef" className="+675" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={papua} />) )} ><img alt="img" id="iclip" src={papua} /><button  id="spance" data-countryCode="PG" value="+675">Papua New Guinea (+675)</button></div>
            <div id="lis_lef" className="+595" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={paraguay} />) )} ><img alt="img" id="iclip" src={paraguay} /><button  id="spance" data-countryCode="PY" value="+595">Paraguay (+595)</button></div>
            <div id="lis_lef" className="+51"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={peru} />) )} ><img alt="img" id="iclip" src={peru} /><button  id="spance" data-countryCode="PE" value="+51">Peru (+51)</button></div>
            <div id="lis_lef" className="+63"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={philippines} />) )} ><img alt="img" id="iclip" src={philippines} /><button  id="spance" data-countryCode="PH" value="+63">Philippines (+63)</button></div>
            <div id="lis_lef" className="+48"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={poland} />) )} ><img alt="img" id="iclip" src={poland} /><button  id="spance" data-countryCode="PL" value="+48">Poland (+48)</button></div>
            <div id="lis_lef" className="+351" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={portugal} />) )} ><img alt="img" id="iclip" src={portugal} /><button  id="spance" data-countryCode="PT" value="+351">Portugal (+351)</button></div>
            <div id="lis_lef" className="+1787"onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={puerto} />) )} ><img alt="img" id="iclip" src={puerto} /><button  id="spance" data-countryCode="PR" value="+1787">Puerto Rico (+1787)</button></div>
            <div id="lis_lef" className="+974" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={qatar} />) )} ><img alt="img" id="iclip" src={qatar} /><button  id="spance" data-countryCode="QA" value="+974">Qatar (+974)</button></div>
            <div id="lis_lef" className="+262" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={reunion} />) )} ><img alt="img" id="iclip" src={reunion} /><button  id="spance" data-countryCode="RE" value="+262">Reunion (+262)</button></div>
            <div id="lis_lef" className="+40"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={romania} />) )} ><img alt="img" id="iclip" src={romania} /><button  id="spance" data-countryCode="RO" value="+40">Romania (+40)</button></div>
            <div id="lis_lef" className="+7"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={russia} />) )} ><img alt="img" id="iclip" src={russia} /><button  id="spance" data-countryCode="RU" value="+7">Russia (+7)</button></div>
            <div id="lis_lef" className="+250" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={rwanda} />) )} ><img alt="img" id="iclip" src={rwanda} /><button  id="spance" data-countryCode="RW" value="+250">Rwanda (+250)</button></div>
            <div id="lis_lef" className="+378" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={san_m} />) )} ><img alt="img" id="iclip" src={san_m} /><button  id="spance" data-countryCode="SM" value="+378">San Marino (+378)</button></div>
            <div id="lis_lef" className="+239" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={tome} />) )} ><img alt="img" id="iclip" src={tome} /><button  id="spance" data-countryCode="ST" value="+239">Sao Tome &amp; Principe (+239)</button></div>
            <div id="lis_lef" className="+966" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={saudi} />) )} ><img alt="img" id="iclip" src={saudi} /><button  id="spance" data-countryCode="SA" value="+966">Saudi Arabia (+966)</button></div>
            <div id="lis_lef" className="+221" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={senegal} />) )} ><img alt="img" id="iclip" src={senegal} /><button  id="spance" data-countryCode="SN" value="+221">Senegal (+221)</button></div>
            <div id="lis_lef" className="+381" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={serbia} />) )} ><img alt="img" id="iclip" src={serbia} /><button  id="spance" data-countryCode="CS" value="+381">Serbia (+381)</button></div>
            <div id="lis_lef" className="+248" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={seychelles} />) )} ><img alt="img" id="iclip" src={seychelles} /><button  id="spance" data-countryCode="SC" value="+248">Seychelles (+248)</button></div>
            <div id="lis_lef" className="+232" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={sierra_l} />) )} ><img alt="img" id="iclip" src={sierra_l} /><button  id="spance" data-countryCode="SL" value="+232">Sierra Leone (+232)</button></div>
            </div>
            
            
            <div id="lis_lef" className="+65"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={singapore} />) )} ><img alt="img" id="iclip" src={singapore} /><button  id="spance" data-countryCode="SG" value="+65">Singapore (+65)</button></div>
            <div id="lis_lef" className="+421"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={slovak} />) )} ><img alt="img" id="iclip" src={slovak} /><button  id="spance" data-countryCode="SK" value="+421">Slovak Republic (+421)</button></div>
            <div id="lis_lef" className="+386"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={slovenia} />) )} ><img alt="img" id="iclip" src={slovenia} /><button  id="spance" data-countryCode="SI" value="+386">Slovenia (+386)</button></div>
            <div id="lis_lef" className="+677"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={solomon} />) )} ><img alt="img" id="iclip" src={solomon} /><button  id="spance" data-countryCode="SB" value="+677">Solomon Islands (+677)</button></div>
            <div id="lis_lef" className="+252"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={somalia} />) )} ><img alt="img" id="iclip" src={somalia} /><button  id="spance" data-countryCode="SO" value="+252">Somalia (+252)</button></div>
            <div id="lis_lef" className="+27"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip"  src={south_a} />) )} ><img alt="img" id="iclip" src={south_a} /><button  id="spance" data-countryCode="ZA" value="+27">South Africa (+27)</button></div>
            <div id="lis_lef" className="+34"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={spain} />) )} ><img alt="img" id="iclip" src={spain} /><button  id="spance" data-countryCode="ES" value="+34">Spain (+34)</button></div>
            <div id="lis_lef" className="+94"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={lanka} />) )} ><img alt="img" id="iclip" src={lanka} /><button  id="spance" data-countryCode="LK" value="+94">Sri Lanka (+94)</button></div>
            <div id="lis_lef" className="+290"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={helena} />) )} ><img alt="img" id="iclip" src={helena} /><button  id="spance" data-countryCode="SH" value="+290">St. Helena (+290)</button></div>
            <div id="lis_lef" className="+1869" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={kitts} />) )} ><img alt="img" id="iclip" src={kitts} /><button  id="spance" data-countryCode="KN" value="+1869">St. Kitts (+1869)</button></div>
            <div id="lis_lef" className="+1758" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={saint} />) )} ><img alt="img" id="iclip" src={saint} /><button  id="spance" data-countryCode="SC" value="+1758">St. Lucia (+1758)</button></div>
            <div id="lis_lef" className="+249"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={sudan} />) )} ><img alt="img" id="iclip" src={sudan} /><button  id="spance" data-countryCode="SD" value="+249">Sudan (+249)</button></div>
            <div id="lis_lef" className="+597"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={suriname} />) )} ><img alt="img" id="iclip" src={suriname} /><button  id="spance" data-countryCode="SR" value="+597">Suriname (+597)</button></div>
            <div id="lis_lef" className="+268"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={swaziland} />) )} ><img alt="img" id="iclip" src={swaziland} /><button  id="spance" data-countryCode="SZ" value="+268">Swaziland (+268)</button></div>
            <div id="lis_lef" className="+46"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={sweden} />) )} ><img alt="img" id="iclip" src={sweden} /><button  id="spance" data-countryCode="SE" value="+46">Sweden (+46)</button></div>
            <div id="lis_lef" className="+41"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={switzerland} />) )} ><img alt="img" id="iclip" src={switzerland} /><button  id="spance" data-countryCode="CH" value="+41">Switzerland (+41)</button></div>
            <div id="lis_lef" className="+963"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={syrian_a} />) )} ><img alt="img" id="iclip" src={syrian_a} /><button  id="spance" data-countryCode="SI" value="+963">Syria (+963)</button></div>
            <div id="lis_lef" className="+886"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={taiwan} />) )} ><img alt="img" id="iclip" src={taiwan} /><button  id="spance" data-countryCode="TW" value="+886">Taiwan (+886)</button></div>
            <div id="lis_lef" className="+7"    onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={tajikistan} />) )} ><img alt="img" id="iclip" src={tajikistan} /><button  id="spance" data-countryCode="TJ" value="+7">Tajikstan (+7)</button></div>
            <div id="lis_lef" className="+66"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={thailand} />) )} ><img alt="img" id="iclip" src={thailand} /><button  id="spance" data-countryCode="TH" value="+66">Thailand (+66)</button></div>
            <div id="lis_lef" className="+228"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={togo} />) )} ><img alt="img" id="iclip" src={togo} /><button  id="spance" data-countryCode="TG" value="+228">Togo (+228)</button></div>
            <div id="lis_lef" className="+676"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={tonga} />) )} ><img alt="img" id="iclip" src={tonga} /><button  id="spance" data-countryCode="TO" value="+676">Tonga (+676)</button></div>
            <div id="lis_lef" className="+1868" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={trinidad} />) )} ><img alt="img" id="iclip" src={trinidad} /><button  id="spance" data-countryCode="TT" value="+1868">Trinidad &amp; Tobago (+1868)</button></div>
            <div id="lis_lef" className="+216"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={tunisia} />) )} ><img alt="img" id="iclip" src={tunisia} /><button  id="spance" data-countryCode="TN" value="+216">Tunisia (+216)</button></div>
            <div id="lis_lef" className="+90"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={turkey} />) )} ><img alt="img" id="iclip" src={turkey} /><button  id="spance" data-countryCode="TR" value="+90">Turkey (+90)</button></div>
            <div id="lis_lef" className="+7"    onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={turkmenistan} />) )} ><img alt="img" id="iclip" src={turkmenistan} /><button  id="spance" data-countryCode="TM" value="+7">Turkmenistan (+7)</button></div>
            <div id="lis_lef" className="+993"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={turkmenistan} />) )} ><img alt="img" id="iclip" src={turkmenistan} /><button  id="spance" data-countryCode="TM" value="+993">Turkmenistan (+993)</button></div>
            <div id="lis_lef" className="+1649" onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={turks} />) )} ><img alt="img" id="iclip" src={turks} /><button  id="spance" data-countryCode="TC" value="+1649">Turks &amp; Caicos Islands (+1649)</button></div>
            <div id="lis_lef" className="+688"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={tuvalu} />) )} ><img alt="img" id="iclip" src={tuvalu} /><button  id="spance" data-countryCode="TV" value="+688">Tuvalu (+688)</button></div>
            <div id="lis_lef" className="+256"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={uganda} />) )} ><img alt="img" id="iclip" src={uganda} /><button  id="spance" data-countryCode="UG" value="+256">Uganda (+256)</button></div>
            <div id="lis_lef" className="+380"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={ukraine} />) )} ><img alt="img" id="iclip" src={ukraine} /><button  id="spance" data-countryCode="UA" value="+380">Ukraine (+380)</button></div>
            <div id="lis_lef" className="+971"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={arab_e} />) )} ><img alt="img" id="iclip" src={arab_e} /><button  id="spance" data-countryCode="AE" value="+971">United Arab Emirates (+971)</button></div>
            <div id="lis_lef" className="+598"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={uruguay} />) )} ><img alt="img" id="iclip" src={uruguay} /><button  id="spance" data-countryCode="UY" value="+598">Uruguay (+598)</button></div>
            <div id="lis_lef" className="+7"    onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={uzbekistan} />) )} ><img alt="img" id="iclip" src={uzbekistan} /><button  id="spance" data-countryCode="UZ" value="+7">Uzbekistan (+7)</button></div>
            <div id="lis_lef" className="+678"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={vanuatu} />) )} ><img alt="img" id="iclip" src={vanuatu} /><button  id="spance" data-countryCode="VU" value="+678">Vanuatu (+678)</button></div>
            <div id="lis_lef" className="+379"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={usa} />) )} ><img alt="img" id="iclip" src={usa} /><button  id="spance" data-countryCode="VA" value="+379">Vatican City (+379)</button></div>
            <div id="lis_lef" className="+58"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={venezuela} />) )} ><img alt="img" id="iclip" src={venezuela} /><button  id="spance" data-countryCode="VE" value="+58">Venezuela (+58)</button></div>
            <div id="lis_lef" className="+84"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={vietnam} />) )} ><img alt="img" id="iclip" src={vietnam} /><button  id="spance" data-countryCode="VN" value="+84">Vietnam (+84)</button></div>
            <div id="lis_lef" className="+84"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={virgin_bi} />) )} ><img alt="img" id="iclip" src={virgin_bi} /><button  id="spance" data-countryCode="VG" value="+84">Virgin Islands - British (+1284)</button></div>
            <div id="lis_lef" className="+84"   onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={virgin_i} />) )} ><img alt="img" id="iclip" src={virgin_i} /><button  id="spance" data-countryCode="VI" value="+84">Virgin Islands - US (+1340)</button></div>
            <div id="lis_lef" className="+681"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={wallis} />) )} ><img alt="img" id="iclip" src={wallis} /><button  id="spance" data-countryCode="WF" value="+681">Wallis &amp; Futuna (+681)</button></div>
            <div id="lis_lef" className="+969"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={yemen} />) )} ><img alt="img" id="iclip" src={yemen} /><button  id="spance" data-countryCode="YE" value="+969">Yemen (North)(+969)</button></div>
            <div id="lis_lef" className="+967"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={yemen} />) )} ><img alt="img" id="iclip" src={yemen} /><button  id="spance" data-countryCode="YE" value="+967">Yemen (South)(+967)</button></div>
            <div id="lis_lef" className="+260"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={zambia} />) )} ><img alt="img" id="iclip" src={zambia} /><button  id="spance" data-countryCode="ZM" value="+260">Zambia (+260)</button></div>
            <div id="lis_lef" className="+263"  onClick={e=> ste(e.currentTarget.className, defultfl2(<img alt="img" id="iclip" src={zimbabwe} />) )} ><img alt="img" id="iclip" src={zimbabwe} /><button  id="spance" data-countryCode="ZW" value="+263">Zimbabwe (+263)</button></div>

                   </ul> 
            </div>

            </div>

            </div>
        )
    }

