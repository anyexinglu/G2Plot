import { deepMix } from '@antv/util';
import BasePlot, { PlotConfig } from '../../base/plot';
import PercentStackedBarLayer, { PercentStackedBarLayerConfig } from './layer';

export interface PercentStackedBarConfig extends PercentStackedBarLayerConfig, PlotConfig {}

export default class PercentStackedBar<T extends PercentStackedBarConfig = PercentStackedBarConfig> extends BasePlot<
  T
> {
  public static getDefaultOptions: typeof PercentStackedBarLayer.getDefaultOptions =
    PercentStackedBarLayer.getDefaultOptions;

  public createLayers(props) {
    const layerProps = deepMix({}, props);
    layerProps.type = 'percentStackedBar';
    super.createLayers(layerProps);
  }
}
