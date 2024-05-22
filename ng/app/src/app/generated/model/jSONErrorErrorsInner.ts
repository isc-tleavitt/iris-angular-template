/**
 * -app-name-api
 * ***This is an initial development build!*** (see [https://semver.org/](https://semver.org/))   ---  # Warnings - No security schemes are defined, consider supplying one by setting specification.Security in AppName.rest.Handler:ModifyOpenAPISpecification - The CheckPermission method is not overwritten in AppName.rest.Handler; access to all documentation-related endpoints will be denied 
 *
 * The version of the OpenAPI document: 0.1.0+debug
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { JSONError } from './jSONError';


export interface JSONErrorErrorsInner { 
    /**
     * The error code
     */
    code?: number;
    domain?: string;
    /**
     * A string-format representation of the error
     */
    error?: string;
    errors?: Array<JSONError>;
    id?: string;
    params?: Array<string>;
}

