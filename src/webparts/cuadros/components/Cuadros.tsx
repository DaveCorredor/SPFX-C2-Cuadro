import * as React from 'react';
import styles from './Cuadros.module.scss';
import { ICuadrosProps } from './ICuadrosProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Cuadros extends React.Component<ICuadrosProps, {}> {
  public render(): React.ReactElement<ICuadrosProps> {
    return (
      <div className={ styles.cuadro}>
        <div className={ styles.cuadroItem}>
          <a className={ styles.caption} href={this.props.enlace1} data-title={this.props.titulo1} data-description={this.props.texto1}>
            <img src={this.props.enlaceimagen1} alt="Illustration of Vulture" />
          </a>
        </div>
        <div className={ styles.cuadroItem}>
          <a className={ styles.caption } href={this.props.enlace1} data-title={this.props.titulo2} data-description={this.props.texto2}>
            <img src={this.props.enlaceimagen2} alt="Illustration of Vulture" />
          </a>
        </div>
      </div>
    );
  }
}
