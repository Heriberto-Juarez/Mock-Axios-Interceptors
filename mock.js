export default {
    create: () => {
        return {
            get: jest.fn(() => Promise.resolve({ data: {} })),
            patch: jest.fn(() => { Promise.resolve({ data: {} }) }),
            put: jest.fn(() => Promise.resolve({ data: {} })),
            delete: jest.fn(() => Promise.resolve({ data: {} })),

            interceptors: {
                response: {
                    use: () => Promise.resolve({})
                },
                request: {
                    use: () => Promise.resolve({})
                }
            }
        }
    }
}
