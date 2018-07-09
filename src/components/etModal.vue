<template>
  <q-modal no-backdrop-dismiss no-esc-dismiss v-model="isModalOpened" :content-css="{minWidth:'75vw', minHeight:'80vh'}">
    <q-modal-layout>
        <q-toolbar slot="header" color="tertiary">
          <q-btn
            @click="discardEditingRec"
            icon="keyboard_arrow_left"
            class="q-mr-md"
            :disabled="getIsLoading"
            wait-for-ripple
            color="grey-7"
          />
          <q-btn :loading="getIsLoading" :color="getEditingRec.id?'orange-10':'green'" @click="updateRec">
            <q-icon :name="getEditingRec.id?'save':'add'" size="25px"/>
            <q-spinner-pie slot="loading" size="25px"/>
          </q-btn>
          <q-toolbar-title>
            {{getEditingRec.name}}
          </q-toolbar-title>
        </q-toolbar>
        <div class="layout-padding">
          <q-field class="q-mb-md" :key="field.name" v-for="field in getFields" v-if="!field.hidden" :label-width="3" :icon="field.icon" :label="field.label" :helper="field.desc" error-label="Some error">
            <q-input v-model="getEditingRec[field.name]" :type="field.type" color="orange-10" />
          </q-field>
        </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  props: {
    type: {
      default: 'xxx',
      type: String,
    },
  },
  data() {
    return {}
  },
  computed: {
    // ...mapGetters('product', ['getFields', 'getEditingRec']),
    ...mapState({
      getIsLoading(state, getters) {
        return getters[this.type + '/getIsLoading']
      },
      getFields(state, getters) {
        return getters[this.type + '/getFields']
      },
      getEditingRec(state, getters) {
        return getters[this.type + '/getEditingRec']
      },
    }),
    isModalOpened: {
      get() {
        return this.$store.getters[this.type + '/getIsModalOpened']
      },
      set(val) {
        this.$store.commit(this.type + '/setIsModalOpened', val)
      },
    },
  },
  methods: {
    ...mapActions({
      updateRec(dispatch, payload) {
        return dispatch(this.type + '/updateRec', payload)
      },
    }),
    ...mapMutations({
      discardEditingRec(dispatch, payload) {
        return dispatch(this.type + '/discardEditingRec', payload)
      },
    }),
  },
}
</script>

<style>
</style>
