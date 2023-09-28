import { createGlobalStyle } from 'styled-components'

export const Globalcss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  .containerMedium{
    max-width: 600px;
    widht: 100%;
    margin: 0 auto;
    padding: 40px 0;
  }

  .containerLarge {
    max-width: 1024px;
    widht: 100%;
    margin: 0 auto;
}

  .buttonAdicionar {
    display: block;
    padding: 4px 8px;
    background-color: #FFEBD9;
    color: #E66767;
    text-align: center;
    border: none;
    text-decoration: none;
    font-weight: bold;
  }
`
export const cores = {
  vermelho: '#E66767',
  bege: '#FFEBD9',
  branco: '#FFFFFF'
}
