/*
 * Copyright 2014 Telefonica Investigación y Desarrollo, S.A.U
 *
 * This file is part of lwm2m-node-lib
 *
 * lwm2m-node-lib is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * lwm2m-node-lib is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with lwm2m-node-lib.
 * If not, seehttp://www.gnu.org/licenses/.
 *
 * For those usages not covered by the GNU Affero General Public License
 * please contact with::[contacto@tid.es]
 */


'use strict';


function getDeviceTypeFromUrlRequest(urlObj, config) {
    if (urlObj.pathname.startsWith('/rd')) {

        if (urlObj.query.includes('&type=')) {
            var type;

            urlObj.query.split('&').forEach(
                function (queryParam) {
                    if (queryParam.includes('type=')) {
                        type = queryParam.split('=')[1];
                    }
                }
            );

            for (var i in config.types) {
                if (type === config.types[i].name) {
                    return type;
                }
            }

        }
        else {
            return config.defaultType;
        }

    }

    else if (config.types) {

        for (var j in config.types) {

            if (urlObj.pathname.includes(config.types[j].url)) {
                return config.types[j].name;
            }

        }

    }

}

exports.getDeviceTypeFromUrlRequest = getDeviceTypeFromUrlRequest;
