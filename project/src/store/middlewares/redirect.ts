import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import { rootReducer } from '../root-reducer';

type Reduser = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reduser> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
