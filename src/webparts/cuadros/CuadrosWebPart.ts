import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CuadrosWebPartStrings';
import Cuadros from './components/Cuadros';
import { ICuadrosProps } from './components/ICuadrosProps';

export interface ICuadrosWebPartProps {
  titulo1: string;
  enlaceimagen1 : string;
  texto1 : string;
  enlace1: string;
  titulo2: string;
  enlaceimagen2 : string;
  texto2 : string;
  enlace2: string;
}

export default class CuadrosWebPart extends BaseClientSideWebPart<ICuadrosWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICuadrosProps> = React.createElement(
      Cuadros,
      {
        titulo1: this.properties.titulo1,
        enlaceimagen1 : this.properties.enlaceimagen1,
        texto1 : this.properties.texto1,
        enlace1: this.properties.enlace1,
        titulo2: this.properties.titulo2,
        enlaceimagen2 : this.properties.enlaceimagen2,
        texto2 : this.properties.texto2,
        enlace2: this.properties.enlace2
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('titulo1', {
                  label: strings.DescripcionTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('enlaceimagen1', {
                  label: strings.DescripcionEnlaceImagen,
                }),
                PropertyPaneTextField('texto1', {
                  label: strings.DescripcionTexto,
                  maxLength: 350,
                  multiline: true,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
                PropertyPaneTextField('enlace1', {
                  label: strings.DescripcionEnlace,
                }),
              ]
            },
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('titulo2', {
                  label: strings.DescripcionTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('enlaceimagen2', {
                  label: strings.DescripcionEnlaceImagen,
                }),
                PropertyPaneTextField('texto2', {
                  label: strings.DescripcionTexto,
                  maxLength: 350,
                  multiline: true,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
                PropertyPaneTextField('enlace2', {
                  label: strings.DescripcionEnlace,
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
