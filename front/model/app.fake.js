let app_fake = (function(){
    'use strict'
    let getPeopleList,fakeIdSerial, makeFakeId, mockSio;
    fakeIdSerial = 5;
    makeFakeId =  ()=> 'id_' + String( fakeIdSerial++ );

    getPeopleList = function(){
        return [
            { name: 'Betty',
            _id : 'id_01',
            css_map : { top: 20, left: 20,'background-color' : 'rgb( 128, 128, 128)'},
            selected:false 
            },
            { name : 'Mike', _id : 'id_02',
            css_map : { top: 60, left: 20,
            'background-color' : 'rgb( 128, 255, 128)',},
            selected:false
            },
            { name : 'Pebbles', _id : 'id_03',
            css_map : { top: 100, left: 20,
            'background-color' : 'rgb( 128, 192, 192)'},
            selected:false
            },
            { name : 'Wilma', _id : 'id_04',
            css_map : { top: 140, left: 20,
            'background-color' : 'rgb( 192, 128, 128)'},
            selected:false
            }
        ]
    }
    mockSio = (function () { 
        let on_sio, emit_sio, callback_map = {};
        on_sio = function ( msg_type, callback ) { callback_map[ msg_type ] = callback;
        };
        emit_sio = function ( msg_type, data ) { 
            // отвечаем на событие 'adduser' вызовом 
        // 'userupdate' через 3 секунды
        // 
        if ( msg_type === 'adduser' && callback_map.userupdate ) {
        setTimeout( function () {
            callback_map.userupdate(
                        [
                            { _id : makeFakeId(),
                            name : data.name,
                            css_map : data.css_map
                        }]
                    );
                }, 3000 );
            }
        };
        return { 
            emit : emit_sio,
            on : on_sio };
    }());

    return {
        getPeopleList,
        mockSio
    }
}())

export default app_fake