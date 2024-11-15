export default [
    {
        url: '/api/v1/get/roleMenuList',
        method: 'get',
        response: () => {
            return {
                'code': 0,
                'msg': '成功',
                'requestId': 'aed24fc6cd46a787e23c8ddf889ae824',
                'data': [
                    {
                        'path': '/layout',
                        'name': 'layout',
                        'component': 'layout/index.vue',
                        'redirect': '/dashboard',
                        'meta': {
                            'ID': 1,
                            'parentID': 0,
                            'roleIDs': '0',
                            'title': '',
                            'icon': '',
                            'hidden': false,
                            'keepAlive': true,
                            'sort': 0
                        },
                        'children': [
                            {
                                'path': '/dashboard',
                                'name': 'dashboard',
                                'component': 'views/dashboard/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 2,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '仪表盘',
                                    'icon': 'odometer',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 1
                                },
                                'children': null
                            },

                            {
                                'path': '/about',
                                'name': 'about',
                                'component': 'views/about/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 6,
                                    'parentID': 1,
                                    'roleIDs': '0',
                                    'title': '关于',
                                    'icon': 'star',
                                    'hidden': false,
                                    'keepAlive': true,
                                    'sort': 3
                                },
                                'children': null
                            },
                            {
                                'path': '/404',
                                'name': '404',
                                'component': 'views/error/index.vue',
                                'redirect': '',
                                'meta': {
                                    'ID': 9,
                                    'parentID': 8,
                                    'roleIDs': '0',
                                    'title': '404',
                                    'icon': 'InfoFilled',
                                    'hidden': true,
                                    'keepAlive': true,
                                    'sort': 5
                                },
                                'children': null
                            }
                        ]
                    },
                    {
                        'path': '/:catchAll(.*)',
                        'name': '',
                        'component': '',
                        'redirect': '/404',
                        'meta': {
                            'ID': 10,
                            'parentID': 0,
                            'roleIDs': '0',
                            'title': '',
                            'icon': '',
                            'hidden': true,
                            'keepAlive': true,
                            'sort': 0
                        },
                        'children': null
                    }
                ],
            }
        }
    },
]