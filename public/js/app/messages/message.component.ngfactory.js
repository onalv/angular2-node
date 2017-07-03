/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './message.component';
import * as import3 from './message.service';
var styles_MessageComponent = ['.author[_ngcontent-%COMP%] {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config[_ngcontent-%COMP%] {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }'];
export var RenderType_MessageComponent = import0.ɵcrt({
    encapsulation: 0,
    styles: styles_MessageComponent,
    data: {}
});
function View_MessageComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'config'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onEdit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Edit'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onDelete() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Delete'])),
        (l()(), import0.ɵted(null, ['\n        ']))
    ], null, null);
}
export function View_MessageComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 13, 'article', [[
                'class',
                'panel panel-default'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'panel-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n        ',
            '\n    '
        ])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'footer', [[
                'class',
                'panel-footer'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'author'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n            ',
            '\n        '
        ])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_MessageComponent_1)),
        import0.ɵdid(16384, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_2 = co.belongsToUser();
        ck(v, 11, 0, currVal_2);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.message.content;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = co.message.username;
        ck(v, 8, 0, currVal_1);
    });
}
function View_MessageComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-message', [], null, null, null, View_MessageComponent_0, RenderType_MessageComponent)),
        import0.ɵdid(49152, null, 0, import2.MessageComponent, [import3.MessageService], null, null)
    ], null, null);
}
export var MessageComponentNgFactory = import0.ɵccf('app-message', import2.MessageComponent, View_MessageComponent_Host_0, { message: 'inputMessage' }, {}, []);
