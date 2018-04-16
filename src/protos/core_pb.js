/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.bc.BcBlock', null, global);
goog.exportSymbol('proto.bc.BcTransaction', null, global);
goog.exportSymbol('proto.bc.Block', null, global);
goog.exportSymbol('proto.bc.Null', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bc.Null = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bc.Null, jspb.Message);
if (true || goog.DEBUG && !COMPILED) {
  proto.bc.Null.displayName = 'proto.bc.Null';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bc.Null.prototype.toObject = function(opt_includeInstance) {
  return proto.bc.Null.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bc.Null} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.Null.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bc.Null}
 */
proto.bc.Null.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bc.Null;
  return proto.bc.Null.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bc.Null} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bc.Null}
 */
proto.bc.Null.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bc.Null.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bc.Null.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bc.Null} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.Null.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bc.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bc.Block, jspb.Message);
if (true || goog.DEBUG && !COMPILED) {
  proto.bc.Block.displayName = 'proto.bc.Block';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bc.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.bc.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bc.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockchain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    previousHash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    merkleRoot: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bc.Block}
 */
proto.bc.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bc.Block;
  return proto.bc.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bc.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bc.Block}
 */
proto.bc.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockchain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreviousHash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerkleRoot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bc.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bc.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bc.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockchain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreviousHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMerkleRoot();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string blockchain = 1;
 * @return {string}
 */
proto.bc.Block.prototype.getBlockchain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bc.Block.prototype.setBlockchain = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string hash = 2;
 * @return {string}
 */
proto.bc.Block.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.bc.Block.prototype.setHash = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string previous_hash = 3;
 * @return {string}
 */
proto.bc.Block.prototype.getPreviousHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.bc.Block.prototype.setPreviousHash = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 timestamp = 4;
 * @return {number}
 */
proto.bc.Block.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.bc.Block.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 height = 5;
 * @return {number}
 */
proto.bc.Block.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.bc.Block.prototype.setHeight = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string merkle_root = 6;
 * @return {string}
 */
proto.bc.Block.prototype.getMerkleRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.bc.Block.prototype.setMerkleRoot = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bc.BcBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bc.BcBlock.repeatedFields_, null);
};
goog.inherits(proto.bc.BcBlock, jspb.Message);
if (true || goog.DEBUG && !COMPILED) {
  proto.bc.BcBlock.displayName = 'proto.bc.BcBlock';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bc.BcBlock.repeatedFields_ = [11,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bc.BcBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.bc.BcBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bc.BcBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.BcBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    miner: jspb.Message.getFieldWithDefault(msg, 3, ""),
    difficulty: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    merkleRoot: jspb.Message.getFieldWithDefault(msg, 6, ""),
    chainRoot: jspb.Message.getFieldWithDefault(msg, 7, ""),
    distance: jspb.Message.getFieldWithDefault(msg, 8, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 9, ""),
    txCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.bc.BcTransaction.toObject, includeInstance),
    childBlockchainCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    childBlockHeadersList: jspb.Message.toObjectList(msg.getChildBlockHeadersList(),
    proto.bc.Block.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bc.BcBlock}
 */
proto.bc.BcBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bc.BcBlock;
  return proto.bc.BcBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bc.BcBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bc.BcBlock}
 */
proto.bc.BcBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiner(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDifficulty(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMerkleRoot(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainRoot(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDistance(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxCount(value);
      break;
    case 11:
      var value = new proto.bc.BcTransaction;
      reader.readMessage(value,proto.bc.BcTransaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChildBlockchainCount(value);
      break;
    case 13:
      var value = new proto.bc.Block;
      reader.readMessage(value,proto.bc.Block.deserializeBinaryFromReader);
      msg.addChildBlockHeaders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bc.BcBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bc.BcBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bc.BcBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.BcBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMiner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDifficulty();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMerkleRoot();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getChainRoot();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDistance();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTxCount();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.bc.BcTransaction.serializeBinaryToWriter
    );
  }
  f = message.getChildBlockchainCount();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getChildBlockHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.bc.Block.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.bc.BcBlock.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bc.BcBlock.prototype.setHash = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.bc.BcBlock.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.bc.BcBlock.prototype.setHeight = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string miner = 3;
 * @return {string}
 */
proto.bc.BcBlock.prototype.getMiner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.bc.BcBlock.prototype.setMiner = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional float difficulty = 4;
 * @return {number}
 */
proto.bc.BcBlock.prototype.getDifficulty = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.bc.BcBlock.prototype.setDifficulty = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 timestamp = 5;
 * @return {number}
 */
proto.bc.BcBlock.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.bc.BcBlock.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string merkle_root = 6;
 * @return {string}
 */
proto.bc.BcBlock.prototype.getMerkleRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.bc.BcBlock.prototype.setMerkleRoot = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string chain_root = 7;
 * @return {string}
 */
proto.bc.BcBlock.prototype.getChainRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.bc.BcBlock.prototype.setChainRoot = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint64 distance = 8;
 * @return {number}
 */
proto.bc.BcBlock.prototype.getDistance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.bc.BcBlock.prototype.setDistance = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional string nonce = 9;
 * @return {string}
 */
proto.bc.BcBlock.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.bc.BcBlock.prototype.setNonce = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional uint64 tx_count = 10;
 * @return {number}
 */
proto.bc.BcBlock.prototype.getTxCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.bc.BcBlock.prototype.setTxCount = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * repeated BcTransaction transactions = 11;
 * @return {!Array.<!proto.bc.BcTransaction>}
 */
proto.bc.BcBlock.prototype.getTransactionsList = function() {
  return /** @type{!Array.<!proto.bc.BcTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bc.BcTransaction, 11));
};


/** @param {!Array.<!proto.bc.BcTransaction>} value */
proto.bc.BcBlock.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.bc.BcTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bc.BcTransaction}
 */
proto.bc.BcBlock.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.bc.BcTransaction, opt_index);
};


proto.bc.BcBlock.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};


/**
 * optional uint64 child_blockchain_count = 12;
 * @return {number}
 */
proto.bc.BcBlock.prototype.getChildBlockchainCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.bc.BcBlock.prototype.setChildBlockchainCount = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * repeated Block child_block_headers = 13;
 * @return {!Array.<!proto.bc.Block>}
 */
proto.bc.BcBlock.prototype.getChildBlockHeadersList = function() {
  return /** @type{!Array.<!proto.bc.Block>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bc.Block, 13));
};


/** @param {!Array.<!proto.bc.Block>} value */
proto.bc.BcBlock.prototype.setChildBlockHeadersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.bc.Block=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bc.Block}
 */
proto.bc.BcBlock.prototype.addChildBlockHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.bc.Block, opt_index);
};


proto.bc.BcBlock.prototype.clearChildBlockHeadersList = function() {
  this.setChildBlockHeadersList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bc.BcTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bc.BcTransaction, jspb.Message);
if (true || goog.DEBUG && !COMPILED) {
  proto.bc.BcTransaction.displayName = 'proto.bc.BcTransaction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bc.BcTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.bc.BcTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bc.BcTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.BcTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bc.BcTransaction}
 */
proto.bc.BcTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bc.BcTransaction;
  return proto.bc.BcTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bc.BcTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bc.BcTransaction}
 */
proto.bc.BcTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bc.BcTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bc.BcTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bc.BcTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bc.BcTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.bc.BcTransaction.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bc.BcTransaction.prototype.setHash = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.bc);
