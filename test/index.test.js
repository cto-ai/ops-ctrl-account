import { test } from 'tapx'
import account from '../index.js'
import keycloak from '@cto.ai/ops-keycloak'

test('exports ops-keycloak', async ({ is }) => {
  is(account, keycloak)
})
