import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'a454ad582b6f4f0aa7d15a4ca7703be0'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3b01bd115d8d41c19095b9c8fa055d1d'
                    }
                }
            }
        }
    }
}
