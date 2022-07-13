const getMethods = (methods: {
  req: any
  res: any
  get?: any
  post?: any
  put?: any
  patch?: any
}) => {
  if (methods.req.method === 'GET') {
    methods.get(methods.req, methods.res)
    return
  }

  if (methods.req.method === 'POST') {
    methods.post(methods.req, methods.res)
    return
  }

  if (methods.req.method === 'PUT') {
    methods.put(methods.req, methods.res)
    return
  }

  if (methods.req.method === 'PATCH') {
    methods.patch(methods.req, methods.res)
    return
  }

  methods.res.json({ error: 'maximum error' })
}

export default getMethods
