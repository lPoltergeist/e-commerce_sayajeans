import styled from "styled-components";

export const Wrap = styled.div`
 overflow: hidden;
  background: #181818; 

  .hmove { display: flex; }

  .hitem {
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  color: #f2f2f2;
  font-size: 1.2rem;
}

@keyframes tickerh {
  0% { transform: translate3d(100%, 0, 0); }
  100% { transform: translate3d(-100%, 0, 0); }
}
.hmove { animation: tickerh linear 15s infinite; }
.hmove:hover { animation-play-state: paused; }
`