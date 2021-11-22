import React from 'react';

const coinList = ({name,price_usd,percent_change_1h,percent_change_24h,percent_change_7d}) => (
    <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="price-container">
              <div className="col-md-6">
                {
                percent_change_24h > 0 ? 
                    <p className="card-text ph">
                    24 saatlik değişim :<div className="price-change">{percent_change_24h}</div>
                  </p>: <p className="card-text ph">
                    24 saatlik değişim :<div className="price-change price-red">{percent_change_24h}</div>
                  </p>
                }
                {
                  percent_change_1h > 0 ?
                  <p className="card-text">
                    1 saatlik değişim :<div className="price-change">{percent_change_1h}</div>
                  </p>:<p className="card-text">
                    1 saatlik değişim :<div className="price-change price-red">{percent_change_1h}</div>
                  </p>
                }
                {
                  percent_change_7d > 0 ?
                  <p className="card-text">
                    7 günlük değişim :<div className="price-change">{percent_change_7d}</div>
                  </p>: <p className="card-text">
                    7 günlük değişim :<div className="price-change price-red">{percent_change_7d}</div>
                  </p>
                }
              </div>
              <div className="col-md-6 ">
                <p className="card-text">
                  Fiyat  <b>$</b> :<div className="price-usd">{price_usd}</div>
                </p>
                <p className="card-text">
                  Fiyat  <b>₺</b> :<div className="price-try">{(price_usd*7).toFixed(2)}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    );

export default coinList;