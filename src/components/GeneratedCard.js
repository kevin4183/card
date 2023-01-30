import React from 'react';

const GeneratedCard = ({ cardInfo }) => {
  return (
    <div className={`card`}>
      <h2>{cardInfo.name} Promise Card</h2>
      <p>
        Things I want{' '}
        <span
          style={{
            backgroundColor: '#fff',
            borderRadius: '100%',
            padding: '5px 10px',
          }}
        >
          {cardInfo.text.length}
        </span>
      </p>
      <div className="form-input">
        {cardInfo.text.map((item, index) => (
          <input
            key={index}
            type="text"
            name="text1"
            placeholder="write item name"
            value={item.value}
          />
        ))}
      </div>

      <div className="share">
        <div className="download">
          <button>download</button>
        </div>
        <div className="download">
          <button>WhatsApp</button>
        </div>
      </div>

      <p className="footer">
        Powered by &hearts;<strong>unboxd</strong>
      </p>
    </div>
  );
};

export default GeneratedCard;
