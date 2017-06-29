// ##### Checkbox Component ##### //

import React from 'react'

class CheckboxComp extends React.Component {
  render() {
    return (
      <ul className="c-checkbox">
        {/* 'id' and 'htmlFor' values must contain a unique number per each pair below for accessibility */}
        <li>
          <input id="c-checkbox__number1" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number1" className="c-checkbox__label">Agricultural History Center (##)</label>
        </li>
        <li>
          <input id="c-checkbox__number2" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number2" className="c-checkbox__label">Agriculture and Natural Resources Research and Extension Centers (##)</label>
          <ul>
            <li>
              <input id="c-checkbox__number3" type="checkbox" className="c-checkbox__input"/>
              <label htmlFor="c-checkbox__number3" className="c-checkbox__label">Hopland Research and Extension Center (##)</label>
            </li>
            <li>
              <input id="c-checkbox__number4" type="checkbox" className="c-checkbox__input"/>
              <label htmlFor="c-checkbox__number4" className="c-checkbox__label">Sierra Foothill Research and Extension Center (##)</label>
            </li>
          </ul>
        </li>
        <li>
          <input id="c-checkbox__number5" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number5" className="c-checkbox__label">Western Journal of Emergency Medicine: Integrating Emergency Care with Population Health</label>
        </li>
        <li>
          <input id="c-checkbox__number6" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number6" className="c-checkbox__label">PDF</label>
        </li>
        <li>
          <input id="c-checkbox__number7" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number7" className="c-checkbox__label">ZIP</label>
        </li>
        <li className="c-checkbox__attrib-cc-by-nc-nd">
          <input id="c-checkbox__number8" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number8" className="c-checkbox__label">Attribution; NonCommercial use; No derivatives (57)</label>
        </li>
        <li className="c-checkbox__attrib-cc-by-nc-sa">
          <input id="c-checkbox__number9" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number9" className="c-checkbox__label">Attribution, NonCommercial use, Derivatives use same license (13)</label>
        </li>
        <li className="c-checkbox__attrib-cc-by-nc">
          <input id="c-checkbox__number10" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number10" className="c-checkbox__label">Attribution; NonCommercial use only (26)</label>
        </li>
        <li className="c-checkbox__attrib-cc-by-nd">
          <input id="c-checkbox__number11" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number11" className="c-checkbox__label">Attribution required (5)</label>
        </li>
        <li className="c-checkbox__attrib-cc-by-sa">
          <input id="c-checkbox__number12" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number12" className="c-checkbox__label">Attribution required (12)</label>
        </li>
        <li className="c-checkbox__attrib-cc-by">
          <input id="c-checkbox__number13" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number13" className="c-checkbox__label">Attribution required (24)</label>
        </li>
        <li className="c-checkbox__attrib-cc-zero">
          <input id="c-checkbox__number14" type="checkbox" className="c-checkbox__input"/>
          <label htmlFor="c-checkbox__number14" className="c-checkbox__label">Attribution required (36)</label>
        </li>
      </ul>
    )
  }
}

module.exports = CheckboxComp;
