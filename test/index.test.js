'use strict'
const { test } = require('tap')
const account = require('..')
const keycloak = require('@cto.ai/ops-keycloak')

test('exports ops-keycloak', async ({ is }) => {
  is(account, keycloak)
})
