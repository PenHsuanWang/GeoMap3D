/**
 * Copyright 2020 (c) Felix Palmer
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import alt from '/alt';

export default alt.generateActions(
  'addBuiltinOverlay',
  'addOverlay',
  'elevationBigProgress',
  'elevationProgress',
  'featuresProgress',
  'imageryBigProgress',
  'imageryProgress',
  'removeOverlay',
  'setElevation',
  'setElevationBig',
  'setFeatures',
  'setHeightOffset',
  'setHeightOffsetBig',
  'setImagery',
  'setImageryBig',
  'setLiabilityUsed',
  'setOSMUsed',
  'setSRTMUsed',
  'setTerrainMesh',
  'updateHeightMap',
  'updateOverlay'
);
