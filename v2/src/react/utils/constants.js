'use strict';
import {remote} from 'electron';
import path from 'path';

export const info_path = path.join(remote.app.getPath("userData"), "./urlList.json");
